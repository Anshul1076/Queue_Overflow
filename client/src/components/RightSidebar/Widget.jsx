// Widget.jsx
import React from "react";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="shadow-md bg-white rounded-md mt-6">
      <h4 className="bg-yellow-100 text-sm font-semibold px-4 py-3 border-b border-yellow-200">
        The Overflow Blog
      </h4>
      <div className="bg-yellow-50 p-4 border border-yellow-200 space-y-3">
        <div className="flex items-start space-x-3">
          <img src={pen} alt="pen" width="18" />
          <p className="text-xs">
            Observability is key to the future of software (and your DevOps career)
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <img src={pen} alt="pen" width="18" />
          <p className="text-xs">Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      <h4 className="bg-gray-100 text-sm font-semibold px-4 py-3 border-b border-gray-300">
        Featured on Meta
      </h4>
      <div className="bg-gray-50 p-4 border border-gray-300 space-y-3">
        <div className="flex items-start space-x-3">
          <img src={comment} alt="comment" width="18" />
          <p className="text-xs">Review queue workflows - Final release....</p>
        </div>
        <div className="flex items-start space-x-3">
          <img src={comment} alt="comment" width="18" />
          <p className="text-xs">
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <img src={blackLogo} alt="black logo" width="18" />
          <p className="text-xs">
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </p>
        </div>
      </div>

      <h4 className="bg-blue-100 text-sm font-semibold px-4 py-3 border-b border-blue-200">
        Hot Meta Posts
      </h4>
      <div className="bg-blue-50 p-4 border border-blue-200 space-y-3">
        <div className="flex items-start space-x-3">
          <p className="text-xs font-semibold text-blue-600">38</p>
          <p className="text-xs">Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className="flex items-start space-x-3">
          <p className="text-xs font-semibold text-blue-600">20</p>
          <p className="text-xs">What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="flex items-start space-x-3">
          <p className="text-xs font-semibold text-blue-600">14</p>
          <p className="text-xs">Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;