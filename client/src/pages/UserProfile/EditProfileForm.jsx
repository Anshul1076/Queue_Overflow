import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";
import toast from "react-hot-toast";
import Editor from "../../components/Editor/Editor";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      toast.error("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
      toast.success("Profile updated");
    }
    setSwitch(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold border-b pb-2 mb-4">Edit Your Profile</h1>
      <h2 className="text-gray-600 font-medium mb-4">Public information</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <h3 className="font-medium">Display Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block">
          <h3 className="font-medium">About Me</h3>
          <Editor value={about} onChange={setAbout} />
        </label>

        <label className="block">
          <h3 className="font-medium">Watched Tags</h3>
          <p className="text-sm text-gray-500">Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <div className="flex space-x-4 mt-4">
          <input
            type="submit"
            value="Update Profile"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          />
          <button
            type="button"
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-100"
            onClick={() => setSwitch(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
