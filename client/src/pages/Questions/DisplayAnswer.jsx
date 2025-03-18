import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import moment from "moment";
import { deleteAnswer } from "../../actions/question";
import toast from "react-hot-toast";
import HTMLReactParser from "html-react-parser";

const DisplayAnswer = ({ question, handleShare }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUser);
  const { id } = useParams();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    toast.success("Answer deleted");
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="pb-5 border-b border-gray-300" key={ans._id}>
          <p className="text-sm leading-5 whitespace-pre-line">
            {HTMLReactParser(ans.answerBody)}
          </p>
          <div className="flex items-center justify-between w-full mt-2">
            <div>
              <button
                type="button"
                onClick={handleShare}
                className="bg-transparent border-none text-gray-500 text-sm hover:text-black transition"
              >
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  className="ml-2 bg-transparent border-none text-gray-500 text-sm hover:text-black transition"
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500">
                answered {moment(ans.answeredOn).fromNow()}
              </p>
              <Link
                to={`/Users/${ans.userId}`}
                className="flex items-center text-[#0086d8] text-sm"
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div className="pl-2">{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer; 
