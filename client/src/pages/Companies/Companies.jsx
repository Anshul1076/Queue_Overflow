import React from "react";
import  companies  from "./companiesdata";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

const CompanyCards = () => {
  return (
    <>
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <LeftSidebar className="w-1/4 hidden md:block" />

      {/* Main Content */}
      <div className="min-h-screen  flex-1 mt-10 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-left mb-6">Company Listings</h1>
        <div className="space-y-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              {/* Company Logo */}
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 object-contain rounded-md"
                // onError={(e) => (e.target.src = "")} // Fallback Image
              />

              {/* Company Details */}
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold">{company.name}</h2>
                <p className="text-gray-600">{company.location}</p>
                <p className="mt-2 text-gray-800">{company.description}</p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                  {company.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div> 
    </div>
    
         <RightSidebar />
    </>
  );
};

export default CompanyCards;
