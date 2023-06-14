import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

//   const dispatch = useDispatch();

  const { username, password } = inputs;

  //handle user input value
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (username && password) {
      //dispatch action
    //   dispatch(login(username, password));
    }
  }

  return (
    <div className={styles.row}>
      <div className={styles.loginFormStyle}>
        <div className={`${styles.loginForm} ${styles.formAddress}`}>
          <h2 className={styles.formTitle}>Reebok Toolkit</h2>
          <div className={styles.logo}>
            <Image className={styles.logo} src={Logo} alt="logo" />
          </div>
          <div className={styles.formName}>
            <span className={styles.formSpan}>
              Hey, Enter your details to get sign in to your account
            </span>
          </div>
          <form className={styles.signinForm}>
            <label className={styles.formLabel}>EMAIL ADDRESS</label>
            <input
              type="email"
              id={styles.inputEmail}
              name="username"
              value={username}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="Email Address"
              required
              autoFocus
            />
            <label className={styles.formLabel}>PASSWORD</label>
            <input
              type="password"
              id={styles.inputPassword}
              name="password"
              value={password}
              className={styles.formControl}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button className={styles.btnSubmit} type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
