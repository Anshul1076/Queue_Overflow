//form.jsx
const Form = ({ type, value, setter }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {type === 'Email' && <p className="font-semibold">Verify email to use chatbot</p>}
      {type === 'OTP' && <p className="font-semibold">Enter OTP to verify. (1 try left)</p>}
      <p className="text-lg font-medium">{type}</p>
      <input
        type={type === 'Email' ? 'email' : 'text'}
        value={value}
        onChange={(e) => setter(e.target.value)} 
        placeholder={type === 'Email' ? 'Enter email...' : 'Enter OTP...'}
        className="w-48 h-8 mt-2 p-2 border border-gray-300 rounded bg-yellow-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  )
}

export default Form