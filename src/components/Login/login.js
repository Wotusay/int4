import React, { useState } from "react";
import styles from "./login.module.css";
import { ROUTES } from "../../consts";
import {Redirect } from "react-router-dom";

const Login = () => {
  const [code, setCode] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (code === "3403 - XPD2  - SPA1 - DPE2") {
      console.log("logged in");
      <Redirect to={ROUTES.home} />
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <div className={styles.login}>
        <p className={styles.loginIntro}>Vul uw code hier in.</p>
        <form>
          <input
            value={code}
            type="text"
            className={styles.loginInput}
            placeholder="3403 - XPD2  - SPA1 - DPE2"
            onChange={(e) => setCode(e.currentTarget.value)}
          ></input>
          <div className={styles.loginButtonWrapper}>
            <button className={styles.loginButtonWhere}>
              Waar vindt ik de code?
            </button>
            <button onClick={handleLogin} className={styles.loginButton}>
              Inloggen
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
