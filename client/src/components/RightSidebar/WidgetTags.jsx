import React from "react";
import { Link } from "react-router-dom";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="mt-10 shadow-md p-4 bg-white rounded-md">
      <h4 className="m-0 p-4 bg-gray-100 border border-gray-300 text-sm font-semibold">
        Watched tags
      </h4>
      <div className="flex flex-wrap items-center justify-evenly border border-gray-300 p-3">
        {tags.map((tag) => (
          <Link key={tag} to="/Tags" className="text-decoration-none">
            <p className="px-2 py-1 bg-blue-100 text-blue-700 rounded-sm text-xs transition-all hover:bg-blue-200">
              {tag}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
