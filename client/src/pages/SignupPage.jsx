import { useState } from "react";
import { TextField } from "../shared/TextField";
import { Link } from "react-router";

export const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordErr, setPasswordErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      setPasswordErr("Passwords do not match");
      setLoading(false);
      return;
    } else {
      setPasswordErr("");
    }
    alert("Details submitted");
    setLoading(false);
  };

  const handleInputChange = (newValue) => {
    setUserDetails({ ...userDetails, ...newValue });
  };

  return (
    <>
      <h1>Sign Up for DueIt</h1>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={userDetails.firstName}
            handleChange={(e) => {
              handleInputChange({ firstName: e.target.value });
            }}
            fieldName={"firstname"}
            label={"First Name"}
            required={true}
          />
          <TextField
            value={userDetails.lastName}
            handleChange={(e) => {
              handleInputChange({ lastName: e.target.value });
            }}
            fieldName={"lastname"}
            label={"Last Name"}
          />
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
          <TextField
            value={userDetails.confirmPassword}
            handleChange={(e) => {
              handleInputChange({ confirmPassword: e.target.value });
            }}
            fieldName={"confirmpassword"}
            label={"Confirm Password"}
            inputType={"password"}
            required={true}
          />
          <p>{passwordErr}</p>
          <button>{loading ? "Loading" : "Create Account"}</button>
        </form>
      </div>
    </>
  );
};
