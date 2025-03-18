// Askquestion.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { askQuestion } from "../../actions/question";
import toast from "react-hot-toast";
import Editor from "../../components/Editor/Editor";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ask Questions USER" , User);
    
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result._id,
            },
            navigate
          )
        );
        toast.success("Question posted successfully");
      } else toast.error("Please enter value in all the fields");
    } else toast.error("Please Login to ask question");
  };

  return (
    <div className="min-h-[80vh] bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto p-5 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-semibold py-5">Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="p-5 bg-white rounded-md shadow-md">
            <label className="block mb-4">
              <h4 className="font-semibold">Title</h4>
              <p className="text-sm text-gray-600 mb-1">
                Be specific and imagine you’re asking a question to another person
              </p>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md"
                onChange={(e) => setQuestionTitle(e.target.value)}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label className="block mb-4">
              <h4 className="font-semibold">Body</h4>
              <p className="text-sm text-gray-600 mb-1">
                Include all the information someone would need to answer your question
              </p>
              <Editor value={questionBody} onChange={setQuestionBody} />
            </label>
            <label className="block mb-4">
              <h4 className="font-semibold">Tags</h4>
              <p className="text-sm text-gray-600 mb-1">
                Add up to 5 tags to describe what your question is about
              </p>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md"
                onChange={(e) => setQuestionTags(e.target.value.split(" "))}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
          >
            Post Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;