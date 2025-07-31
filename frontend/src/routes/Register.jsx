import NavButton from "../components/NavButton";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <RegisterForm />
      <NavButton text="Go to Home" route="/" />
    </>
  );
};

export default Register;
