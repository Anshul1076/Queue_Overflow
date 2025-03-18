import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-300 bg-white hover:bg-gray-50 transition duration-300">
      {/* Votes & Answers Section */}
      <div className="flex flex-col items-center w-16 text-gray-700">
        <p className="font-semibold text-lg">{question.upVote.length - question.downVote.length}</p>
        <p className="text-sm text-gray-500">votes</p>
        <p className="font-semibold text-lg mt-2">{question.noOfAnswers}</p>
        <p className="text-sm text-gray-500">answers</p>
      </div>

      {/* Question Title & Tags */}
      <div className="flex-grow ml-4">
        <Link
          to={`/Questions/${question._id}`}
          className="text-[#0074cc] hover:text-[#009dff] font-semibold text-lg leading-tight"
        >
          {question.questionTitle.length > 90
            ? question.questionTitle.substring(0, 90) + "..."
            : question.questionTitle}
        </Link>

        <div className="flex flex-wrap mt-2">
          {question.questionTags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* User & Time Section */}
      <div className="text-right text-sm text-gray-600">
        <p>
          asked {moment(question.askedOn).fromNow()} by{" "}
          <span className="text-[#0074cc] font-medium">{question.userPosted}</span>
        </p>
      </div>
    </div>
  );
};

export default Questions;
