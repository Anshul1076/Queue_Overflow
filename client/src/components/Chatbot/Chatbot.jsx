import React, { useState } from 'react';
import { BsArrowBarDown } from 'react-icons/bs';
import { AiOutlineSend, AiOutlineDelete } from 'react-icons/ai';
import ChatMessage from './ChatMessage';
import Form from './Form';
import toast from 'react-hot-toast';

const Chatbot = ({ setIsOpen, isVerified, setIsVerified }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sentEmail, setSentEmail] = useState(false);
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chatLogNew = [...chatLog, { user: 'me', message: input }];
    setInput('');
    setChatLog(chatLogNew);
    const messages = chatLogNew.map(message => message.message).join('\n');
    try {
      const response = await fetch('http://localhost:4006/chatbot/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: messages
        })
      });
      const data = await response.json();
      setChatLog([...chatLogNew, { user: 'gpt', message: data.message }]);
    } catch (error) {
      setChatLog([...chatLogNew, { user: 'gpt', message: 'Some error occurred. Try another question' }]);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4006/otp/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        subject: 'Email Verification OTP',
        message: "Hi, As you are trying to verify, here is the OTP that you need to enter to verify your email address. If you didn't make this request, please ignore this email.",
        duration: 1
      })
    });
    const data = await response.json();
    if (data.otp) {
      setSentEmail(true);
      toast.success('OTP Sent Successfully. Please wait up to 1-2 mins');
    } else {
      toast.error('Try again');
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4006/otp/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        otp: otp
      })
    });
    const data = await response.json();
    if (data.valid) {
      toast.success('Successfully verified');
      setIsVerified(true);
    } else {
      toast.error('Wrong OTP! Try again');
      setIsVerified(false);
    }
    setSentEmail(false);
  };

  return (
    <div className="fixed bottom-0 right-5 w-96 h-[30rem] bg-yellow-100 shadow-lg transition-all p-0">
      <div className="flex justify-between items-center px-3 py-2 bg-yellow-200 shadow-md">
        <div className="flex">
          <BsArrowBarDown className="cursor-pointer p-1 mr-2 rounded-full hover:bg-orange-500 hover:text-white" size={20} onClick={() => setIsOpen((isOpen) => !isOpen)} />
          {isVerified && <AiOutlineDelete className="cursor-pointer p-1 rounded-full hover:bg-orange-500 hover:text-white" size={20} onClick={() => setChatLog([])} />}
        </div>
        <p className="font-bold hover:text-orange-500">AI Chatbot</p>
      </div>
      <div className="h-4/5 bg-yellow-100 shadow-md overflow-y-auto p-2">
        {!isVerified ? (
          !sentEmail ? (
            <form onSubmit={handleEmailSubmit} className="absolute left-1/4 top-1/4 flex flex-col items-center">
              <Form type={'Email'} value={email} setter={setEmail} />
              <button type='submit' className="mt-2 bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">Submit</button>
            </form>
          ) : (
            <form onSubmit={handleOTPSubmit} className="absolute left-1/4 top-1/4 flex flex-col items-center">
              <Form type={'OTP'} value={otp} setter={setOtp} />
              <button type='submit' className="mt-2 bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">Submit</button>
            </form>
          )
        ) : chatLog.length === 0 && <span className="text-gray-600">Ask your queries!</span>}
        {chatLog.map((message, index) => (
          <ChatMessage message={message} key={index} />
        ))}
      </div>
      <form className="flex items-center bg-yellow-200 p-1">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your doubt...' className="w-4/5 px-2 py-1 rounded focus:outline-none bg-yellow-50" disabled={!isVerified} />
        <button className="ml-2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600" onClick={handleSubmit} disabled={!isVerified}>
          <AiOutlineSend size={15} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;