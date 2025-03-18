import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please enter email and password");

    if (isSignup) {
      if (!name) return toast.error("Please enter name");
      dispatch(signup({ name, email, password }, navigate));
      // toast.success("User registered successfully");
      
    } else {
      dispatch(login({ email, password }, navigate));
      // toast.success("Logged in successfully");
    }
  };

  const handleOAuth = (provider) => {
    toast.success(`Redirecting to ${provider} login...`);
    // Integrate actual OAuth logic here
  };

  return (
    <section className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className=" flex flex-col justify-center items-center">
     <div>
     <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png" 
     alt="stack overflow" className=" mb-4 h-14 w-14 " />

     </div>
        {/* OAuth Buttons */}
        <button
          onClick={() => handleOAuth("Google")}
          className="flex items-center w-full px-4 py-2 mb-2 border rounded-md bg-white shadow-sm hover:bg-gray-200 transition"
        >
          <FcGoogle size={20} className="mr-2" />
          Log in with Google
        </button>
        <button
          onClick={() => handleOAuth("GitHub")}
          className="flex items-center w-full px-4 py-2 mb-2 border rounded-md bg-black text-white shadow-sm hover:bg-gray-800 transition"
        >
          <FaGithub size={20} className="mr-2" />
          Log in with GitHub
        </button>
        <button
          onClick={() => handleOAuth("Facebook")}
          className="flex items-center w-full px-4 py-2 mb-4 border rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition"
        >
          <FaFacebook size={20} className="mr-2" />
          Log in with Facebook
        </button>

        {/* Email/Password Login */}
        <form onSubmit={handleSubmit} className="w-full p-5 bg-white rounded-lg shadow-md">
          {isSignup && (
            <label htmlFor="name" className="block mb-2">
              <h4 className="mb-1">Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </label>
          )}

          <label htmlFor="email" className="block mb-2">
            <h4 className="mb-1">Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </label>

          <label htmlFor="password" className="block mb-2">
            <div className="flex justify-between">
              <h4 className="mb-1">Password</h4>
              {!isSignup && <p className="text-blue-500 text-sm cursor-pointer">Forgot password?</p>}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </label>

          <button type="submit" className="w-full mt-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="mt-3 text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="text-blue-500 ml-2"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
