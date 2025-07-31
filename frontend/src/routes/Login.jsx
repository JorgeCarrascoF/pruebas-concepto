import LoginForm from "../components/LoginForm";
import NavButton from "../components/NavButton";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
      <NavButton text="Go to Home" route="/" />
    </>
  );
};

export default Login;
