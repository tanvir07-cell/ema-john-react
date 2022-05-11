import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, loading, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  //  email,password,confirm-password er input value gula neoaar jonne:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    //   email er value jate email variable e set hoy tar jonne setEmail function e value rekechie:
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("The two password doesn't match each other!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">SignUp Here</h1>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              required
            />

            <p style={{ color: "red" }}>{error}</p>
          </div>
          <input type="submit" value="Sign Up" className="form-submit" />
        </form>
        <p>
          Already have an account? <Link to="/login">Please Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
