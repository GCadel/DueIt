import { Link } from "react-router";

const LandingPage = () => {
  return (
    <>
      <h1>Ready to tackle your tasks? Let's DueIt!</h1>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Get Started</Link>
    </>
  );
};
export default LandingPage;
