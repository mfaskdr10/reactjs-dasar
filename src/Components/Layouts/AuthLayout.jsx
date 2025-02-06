/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayout = ({ title, desc, children, type }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{title}</h1>
        <p className="text-base text-slate-500 mb-5">{desc}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm font-semibold text-center mt-5">
        {`Don't have an account? `}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm font-semibold text-center mt-5">
        {`Have an account? `}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
