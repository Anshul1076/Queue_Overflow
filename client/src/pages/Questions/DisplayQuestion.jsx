import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <QuestionsDetails />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
