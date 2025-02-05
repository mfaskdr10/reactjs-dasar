import { Link } from "react-router-dom";
import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Your Account"
      desc="Welcome, please enter your details"
    >
      <FormRegister />
      <p className="text-sm font-semibold text-center mt-5">
        {`Have an account? `}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
