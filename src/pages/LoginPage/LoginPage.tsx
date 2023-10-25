import React from "react";
import "./styles.scss";

function LoginPage(): JSX.Element {
  return (
    <div className="login-container">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
