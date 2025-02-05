/* eslint-disable react/prop-types */

const Button = (props) => {
  const { classname = "bg-black", children = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
