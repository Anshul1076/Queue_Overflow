import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link
      to={`/Users/${user._id}`}
      className="block max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform hover:scale-105"
    >
      <div className="flex items-center space-x-4">
        {/* Profile Picture */}
        <img
          src={user.profilePic || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
          alt="User Avatar"
          className="h-12 w-12 rounded-full border border-gray-300"
        />

        {/* User Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600">View Profile</p>
        </div>
      </div>
    </Link>
  );
};

export default User;
