import React, { useState } from "react";
import styles from "./login.module.css";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";

const Login = () => {
  const [code, setCode] = useState("");
  const [badCode, setBadCode] = useState("");
  const { uiStore } = useStores();

  const handleLogin = async (e) => {
    uiStore.setCurrentCode(code);
    e.preventDefault();
    uiStore.login();
    if(code !== '3403 - XPD2 - SPA1 - DPE2' || code !== '6056 - XPD3 - SPA4 - DPE9' || code !== '8737 - XPD4 - SPB4 - D3RP') {
      setBadCode('Verkeerde code');
      console.log('bad code');
    }
  };

  return useObserver (() => (
    <>
      <div className={styles.login}>
        <div>
        <p className={styles.loginIntro}>Vul uw code hier in.</p>
        <p className={styles.loginIntro}>{badCode}</p>

        </div>
        <form>
          <input
            value={code}
            type="text"
            className={styles.loginInput}
            placeholder="3403 - XPD2 - SPA1 - DPE2"
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
  ));
};

export default Login;
