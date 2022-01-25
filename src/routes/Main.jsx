import React from "react";
import SecondCalc from "../components/SecondCalc";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <SecondCalc />
    </div>
  );
}

export default Main;
