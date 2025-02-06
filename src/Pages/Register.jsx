import { Link } from "react-router-dom";
import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Your Account"
      desc="Welcome, please enter your details"
      type="register"
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
