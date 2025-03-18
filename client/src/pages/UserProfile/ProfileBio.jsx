import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Tags Section */}
      <div className="mb-4">
        {currentProfile?.tags.length > 0 ? (
          <>
            <h4 className="text-lg font-semibold mb-2">Tags Watched</h4>
            <div className="flex flex-wrap gap-2">
              {currentProfile?.tags.map((tag) => (
                <Link
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded"
                  to="/Tags"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">0 tags watched</p>
        )}
      </div>

      {/* About Section */}
      <div>
        {currentProfile?.about ? (
          <>
            <h4 className="text-lg font-semibold mb-2">About</h4>
            <p className="text-gray-700">{HTMLReactParser(currentProfile?.about)}</p>
          </>
        ) : (
          <p className="text-gray-500">No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
