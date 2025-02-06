import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" desc="Welcome, please enter your details" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
