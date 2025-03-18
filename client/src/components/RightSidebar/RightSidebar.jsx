// RightSideBar.jsx
import React from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-72 mt-10 mb-4 ml-6 text-sm float-right">
      <div className="mt-2 shadow-md">
        <h4 className="bg-yellow-100 p-4 border border-yellow-300 text-xs font-semibold">
          Widget Title
        </h4>
        <div className="bg-yellow-50 p-4 border border-yellow-300">
          <div className="flex justify-evenly">
            <p className="pl-2 text-xs">Some text here</p>
          </div>
        </div>
      </div>
      <Widget />
      <div className="mt-10 shadow-md">
        <h4 className="bg-gray-100 p-4 border border-gray-300 text-xs font-semibold">
          Tags
        </h4>
        <div className="flex flex-wrap justify-evenly border border-gray-300 p-2">
          <p className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer hover:bg-blue-200">
            Tag 1
          </p>
          <p className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs cursor-pointer hover:bg-blue-200">
            Tag 2
          </p>
        </div>
      </div>
      <WidgetTags />
    </aside>
  );
};

export default RightSidebar;