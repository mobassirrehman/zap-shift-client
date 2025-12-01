import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router-dom";
import authImage from "../assets/logo/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Logo />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Outlet />
          </div>
          <div className="hidden lg:flex w-1/2 justify-center">
            <img
              src={authImage}
              alt="Authentication illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
