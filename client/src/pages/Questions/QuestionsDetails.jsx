import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import HTMLReactParser from "html-react-parser";

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { postAnswer, deleteQuestion, voteQuestion } from "../../actions/question";
import Editor from "../../components/Editor/Editor";
import Loader from "../../components/Loader/Loader";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questions);
  console.log("questions list", questionsList);
  
  const User = useSelector((state) => state.currentUser);

  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "http://localhost:5173/";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (!User) {
      toast.error("Please Login or Signup to answer a question");
      navigate("/Auth");
    } else if (answer.trim() === "") {
      toast.error("Enter an answer before submitting");
    } else {
      dispatch(
        postAnswer({
          id,
          noOfAnswers: answerLength + 1,
          answerBody: answer,
          userAnswered: User.result.name,
          userId: User.result._id,
        })
      );
      setAnswer("");
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    toast.success("URL copied to clipboard");
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, navigate));
    toast.success("Question deleted");
  };

  const handleVote = (type) => {
    if (!User) {
      return toast.error("Please Login or Signup to vote");
    }
    dispatch(voteQuestion(id, type, User.result._id));
    toast.success(type === "upVote" ? "Upvoted" : "Downvoted");
  };

  return (
    <div className="w-full md:w-[calc(100%-300px-24px)] mx-auto my-6">
      {questionsList.data === null ? (
        <Loader />
      ) : (
        questionsList.data
          .filter((question) => question._id === id)
          .map((question) => (
            <div key={question._id}>
              <section className="mb-5 pb-5 border-b border-gray-300 mt-10">
                <h1 className="text-2xl font-bold">{question.questionTitle}</h1>
                <div className="flex mt-4">
                  <div className="flex flex-col items-center mr-5">
                    <img
                      src={upvote}
                      alt="Upvote"
                      width="18"
                      className="cursor-pointer"
                      onClick={() => handleVote("upVote")}
                    />
                    <p className="text-lg">
                      {(question.upVote?.length || 0) - (question.downVote?.length || 0)}
                    </p>
                    <img
                      src={downvote}
                      alt="Downvote"
                      width="18"
                      className="cursor-pointer"
                      onClick={() => handleVote("downVote")}
                    />
                  </div>
                  <div className="w-full">
                    <p className="leading-6">{HTMLReactParser(question.questionBody)}</p>
                    <div className="flex flex-wrap mt-2">
                      {question.questionTags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <button className="text-gray-600 mr-3" onClick={handleShare}>
                          Share
                        </button>
                        {User?.result._id === question.userId && (
                          <button className="text-gray-600" onClick={handleDelete}>
                            Delete
                          </button>
                        )}
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-500 mr-2">
                          asked {moment(question.askedOn).fromNow()}
                        </p>
                        <Link to={`/Users/${question.userId}`} className="flex items-center text-blue-500">
                          <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                            {question.userPosted.charAt(0).toUpperCase()}
                          </Avatar>
                          <span className="ml-2">{question.userPosted}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {question.noOfAnswers !== 0 && (
                <section>
                  <h3 className="text-lg font-semibold">{question.noOfAnswers} Answers</h3>
                  <DisplayAnswer
                    key={question._id}
                    question={question}
                    handleShare={handleShare}
                  />
                </section>
              )}
              <section className="mt-6">
                <h3 className="text-lg font-semibold">Your Answer</h3>
                <form onSubmit={(e) => handlePostAns(e, question.noOfAnswers)}>
                  <Editor value={answer} onChange={setAnswer} />
                  <input
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                    value="Post Your Answer"
                  />
                </form>
                <p className="mt-4 text-sm">
                  Browse other questions tagged{" "}
                  {question.questionTags.map((tag) => (
                    <Link to="/Tags" key={tag} className="text-blue-500 mx-1">
                      {tag}
                    </Link>
                  ))}{" "}
                  or{" "}
                  <Link to="/AskQuestion" className="text-blue-500">
                    ask your own question.
                  </Link>
                </p>
              </section>
            </div>
          ))
      )}
    </div>
  );
};

export default QuestionsDetails;
