/* eslint-disable react/prop-types */

const AuthLayout = (props) => {
  const { title, desc, children } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{title}</h1>
        <p className="text-base text-slate-500 mb-5">{desc}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
