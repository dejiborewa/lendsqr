import { useState } from "react";
import { logo } from "../../assets/svg/logo";
import "./welcome.scss";
import SignIn from "../../assets/images/signIn.webp";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const togglePasswordType = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <section className="welcome">
      <nav>
        <div className="logo">{logo}</div>
      </nav>{" "}
      <div className="welcome-main">
        <img
          src={SignIn}
          className="signIn-image"
          alt="signIn"
          loading="eager"
        />
        <div className="welcome-form-container">
          <form className="welcome-form" onSubmit={handleSubmit}>
            <div>
              <h1 className="welcome-heading">Welcome!</h1>
              <p className="welcome-text">Enter details to login</p>
            </div>
            <div className="form-inputs">
              <div className="password-container">
                <input type="email" placeholder="Email" required />
              </div>

              <div className="password-container">
                <input type={passwordType} placeholder="Password" required />
                <p onClick={togglePasswordType}>
                  {passwordType === "password" ? "SHOW" : "HIDE"}
                </p>
              </div>
            </div>
            <p className="forgot-password">FORGOT PASSWORD?</p>
            <button type="submit" className="login">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
