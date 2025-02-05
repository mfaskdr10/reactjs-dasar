import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" desc="Welcome, please enter your details">
      <FormLogin />
      <p className="text-sm font-semibold text-center mt-5">
        {`Don't have an account? `}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
