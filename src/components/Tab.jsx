import React from "react";
import styles from "./Tab.module.css";
function Tab({
  inputUserValue,
  tabMenu,
  exchangeRate,
  dropDownValue,
  tabBtnHandler,
  currentTab,
}) {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("en-US", { month: "short" });
  const day = newDate.getDate();
  return (
    <div className={styles.tabBox}>
      <div className={styles.tabMenu}>
        {tabMenu.map((tab, i) => (
          <button
            key={i}
            onClick={tabBtnHandler}
            value={tab}
            className={tab === currentTab ? styles.active : null}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.contentBox}>
        <h2>
          {currentTab}{" "}
          {(
            inputUserValue *
            (exchangeRate["USD" + currentTab] /
              exchangeRate["USD" + dropDownValue])
          )
            .toFixed(2)
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
        <h4>기준일 :</h4>
        <h4>{`${year}-${month}-${day}`}</h4>
      </div>
    </div>
  );
}

export default Tab;
