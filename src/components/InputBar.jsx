import React from "react";
import styles from "./InputBar.module.css";

function InputBar({ getValueHandler, userValue, dropDownHandler, onSubmit }) {
  return (
    <div className={styles.inputBox}>
      <form className={styles.inputMoney} onSubmit={onSubmit}>
        <input type="number" onChange={getValueHandler} value={userValue} />
      </form>
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
