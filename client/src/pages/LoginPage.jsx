import { useState } from "react";
import { Link } from "react-router";
import { TextField } from "../shared/TextField";

export const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (newValue) => {
    setUserDetails({ ...userDetails, ...newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Logic for logging in
    setLoading(false);
  };

  return (
    <>
      <h1>Welcome back to DueIt</h1>
      <p>
        Don't have an account? <Link to={"/signup"}>Create an account</Link>
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={userDetails.email}
            handleChange={(e) => {
              handleInputChange({ email: e.target.value });
            }}
            fieldName={"email"}
            label={"Email"}
            inputType={"email"}
            required={true}
          />
          <TextField
            value={userDetails.password}
            handleChange={(e) => {
              handleInputChange({ password: e.target.value });
            }}
            fieldName={"password"}
            label={"Password"}
            inputType={"password"}
            required={true}
          />

          <p>{error}</p>
          <button>{loading ? "Loading" : "Log In"}</button>
        </form>
      </div>
    </>
  );
};
