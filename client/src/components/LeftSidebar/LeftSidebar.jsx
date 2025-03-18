import React from "react";
import { NavLink } from "react-router-dom";
import { Globe, Home, Tag, Users, Building, FlaskConical, Info, MessageSquare, Plus } from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="w-48 min-h-screen bg-white  shadow-[4px_0_6px_-2px_rgba(0,0,0,0.1)] text-sm">
      <nav className="sticky my-12 py-5 space-y-6">
        
        {/* Main Section */}
        <div className="space-y-2">
          <SidebarItem to="/" icon={<Home />} label="Home" />
          <SidebarItem to="/Questions" icon={<Globe />} label="Questions" />
          <SidebarItem to="/Tags" icon={<Tag />} label="Tags" />
        </div>

        {/* Users & Companies */}
        <div className="space-y-2 pt-4 ">
          <SidebarItem to="/Users" icon={<Users />} label="Users" />
          <SidebarItem to="/Companies" icon={<Building />} label="Companies" />
        </div>

        {/* Labs & Discussion */}
        <div className="space-y-2 pt-4 ">
          <div className="flex items-center justify-between px-2.5 text-gray-700 font-medium">
            <span>Labs</span>
            <Info className="text-gray-500 cursor-pointer hover:text-gray-700" size={16} />
          </div>
          <SidebarItem to="/Discussion" icon={<MessageSquare />} label="Discussion" />
        </div>

        {/* Collectives */}
        <div className="space-y-2 pt-6 ">
          <div className="flex items-center justify-between px-2.5 text-gray-700 font-medium">
            <span>Collectives</span>
            <Plus className="text-gray-500 cursor-pointer hover:text-gray-700" size={16} />
          </div>
          <p className="text-gray-600 px-2.5 text-xs">
            Communities for your favorite technologies.  
            <NavLink to="/Collectives" className="text-blue-500 font-medium hover:underline"> Explore all Collectives</NavLink>
          </p>
        </div>

      </nav>
    </div>
  );
};

const SidebarItem = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className="flex items-center px-3 py-1.5 text-gray-700 hover:bg-gray-200 rounded-md transition"
    activeclassname="active"
  >
    {React.cloneElement(icon, { size: 18, stroke: "currentColor", strokeWidth: 1.5 })} 
    <span className="ml-3">{label}</span>
  </NavLink>
);

export default LeftSidebar;
