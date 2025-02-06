/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, desc, children, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{title}</h1>
        <p className="text-base text-slate-500 mb-5">{desc}</p>
        {children}
        <p className="text-sm font-semibold text-center mt-5">
          {type === "login" ? "Don't have an account? " : "Have an a Account "}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="font-bold text-blue-600"
          >
            {type === "login" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
