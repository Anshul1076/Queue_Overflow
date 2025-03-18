// home main bar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questions);

  console.log("questions list", questionsList);
  

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    
    <div className="w-full md:w-[calc(100%-324px)] float-left my-6  p-0">
      <div className="flex justify-between items-center">
        {location.pathname === "/" ? (
          <h1 className="font-normal text-3xl mb-3 ">Newest Questions</h1>
        ) : (
          <h1 className="font-normal text-xl">All Questions</h1>
        )}
        <button
          onClick={checkAuth}
          className="px-3 py-2 rounded-md bg-blue-500 text-white border-none transition duration-300 hover:bg-blue-600"
        >
          
          Ask Question
        </button>
      </div>
      <div>
        {questionsList?.data === null ? (
          <Loader />
        ) : (
          <>
            <p className="text-sm text-gray-600 mb-2">{questionsList?.data?.length} questions</p>
            <QuestionList questionsList={questionsList?.data ?? []  } />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;