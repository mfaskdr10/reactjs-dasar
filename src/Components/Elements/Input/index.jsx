/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <>
      <div className="mb-6">
        <Label htmlfor={name}>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
      </div>
    </>
  );
};

export default InputForm;
