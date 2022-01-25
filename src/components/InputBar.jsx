import React from "react";
import styles from "./InputBar.module.css";

function InputBar({ getValueHandler, userValue, dropDownHandler }) {
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.inputMoney}
        onChange={getValueHandler}
        value={userValue}
      />
      <select className={styles.selectMoney} onChange={dropDownHandler}>
        <option>USD</option>
        <option>CAD</option>
        <option>KRW</option>
        <option>HKD</option>
        <option>JPY</option>
        <option>CNY</option>
      </select>
    </div>
  );
}

export default InputBar;
