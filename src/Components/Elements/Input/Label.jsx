/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      className="block text-sm text-slate-700 font-bold mb-2 placeholder:opacity-10"
      htmlFor={htmlfor}
    >
      {children}
    </label>
  );
};

export default Label;
