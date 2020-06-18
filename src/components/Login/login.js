import React, { useState } from "react";
import styles from "./login.module.css";
import { useStores } from "../../hooks/index";

const Login = () => {
  const [code, setCode] = useState("");
  const { uiStore } = useStores();

  const handleLogin = async (e) => {
    uiStore.setCurrentCode(code);
    e.preventDefault();
    uiStore.login();
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
              Waar vind ik de code?
            </button>
            <button
              onClick={(e) => handleLogin(e)}
              className={styles.loginButton}
            >
              Inloggen
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
