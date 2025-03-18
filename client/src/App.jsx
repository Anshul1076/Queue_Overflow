import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="min-h-screen max-w-[1250px] w-full mx-auto flex justify-between mt-6">
      <Router>
        <Toaster />
        <Navbar setIsOpen={setIsOpen} />
        <AllRoutes />
        {isOpen ? (
          <Chatbot
            setIsOpen={setIsOpen}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        ) : (
          <button
            className="fixed bottom-5 right-5 bg-orange-500 text-white px-5 py-3 rounded-lg cursor-pointer text-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Have Doubts? Click here!
          </button>
        )}
      </Router>
    </div>
  );
}

export default App;
