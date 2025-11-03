import React, { useState } from "react";
import Header from "./Header.jsx";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/b_ground.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Form */}
      <form className="w-3/12 absolute p-12 bg-black/70 my-12 mx-auto right-0 left-0 rounded-lg text-left">
        <h2 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {/* Inputs */}
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full rounded bg-gray-700 text-white placeholder-gray-300"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded bg-gray-700 text-white placeholder-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded bg-gray-700 text-white placeholder-gray-300"
        />

        {/* Button */}
        <button className="p-2 my-10 text-white bg-red-700 w-full rounded-lg hover:bg-red-800 transition">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle Text */}
        <p
          onClick={toggleSignInForm}
          className="text-white py-4 cursor-pointer hover:underline"
        >
          {isSignInForm
            ? "New to FlixZone? Sign Up"
            : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
