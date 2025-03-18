import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import User from "./User";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 mt-8 p-4">
        <h1 className="font-normal text-2xl">Users</h1>
        {users.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
            {users.map((user) => (
              <User user={user} key={user?._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
