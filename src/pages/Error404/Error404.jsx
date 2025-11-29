import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="py-12 px-4 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <img src="" alt="" className="" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#03373D] mb-6">
            Error 404
          </h1>
          <Link
            to="/"
            className="btn btn-outline border-[#03373D] text-[#03373D] hover:bg-[#03373D] hover:text-white rounded-full px-8"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
