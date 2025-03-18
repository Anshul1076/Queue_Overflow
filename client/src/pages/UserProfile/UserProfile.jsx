import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Cake, Pencil } from "lucide-react"; // Import Lucide icons
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const currentProfile = users.find((user) => user._id === id);
  const currentUser = useSelector((state) => state.currentUser);
  const [Switch, setSwitch] = useState(false);

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-grow p-6">
        <section>
          {/* User details container */}
          <div className="w-full mt-12 flex items-start justify-between">
            <div className="flex items-start">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="pl-5">
                <h1 className="text-2xl font-semibold">{currentProfile?.name}</h1>
                <p className="text-gray-500 flex items-center">
                  <Cake size={16} className="mr-2" /> Joined {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="px-3 py-2 border border-gray-500 rounded bg-white transition duration-300 hover:bg-blue-50 flex items-center"
              >
                <Pencil size={16} className="mr-2" /> Edit Profile
              </button>
            )}
          </div>

          {/* Edit Profile */}
          {Switch ? (
            <div className="p-5 border border-gray-300 rounded-md">
              <h3 className="pb-3 border-b border-gray-300 text-lg font-medium">
                Edit Profile
              </h3>
              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
            </div>
          ) : (
            <ProfileBio currentProfile={currentProfile} />
          )}

          {/* Tags container */}
          <div className="flex mt-5">
            <a href="#" className="px-2 py-1 m-1 bg-blue-100 text-blue-600 rounded text-sm">
              #tag1
            </a>
            <a href="#" className="px-2 py-1 m-1 bg-blue-100 text-blue-600 rounded text-sm">
              #tag2
            </a>
          </div>

          {/* Submit & Cancel Buttons */}
          <div className="mt-5">
            <button className="px-4 py-3 bg-blue-600 text-white rounded-md transition hover:bg-blue-700">
              Submit
            </button>
            <button className="px-4 py-3 ml-3 text-blue-600 bg-transparent border-none cursor-pointer">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
