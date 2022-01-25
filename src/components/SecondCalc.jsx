import React, { useEffect, useState } from "react";
import styles from "./SecondCalc.module.css";
import InputBar from "./InputBar";
import Tab from "./Tab";

function SecondCalc() {
  const [userValue, setUserValue] = useState("");
  const [dropDownValue, setDropDownValue] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState({});
  const tabArr = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
  const [tabMenu, setTabMenu] = useState(tabArr.slice(1));
  const [currentTab, setCurrentTab] = useState("CAD");
  const getValueHandler = (event) => {
    let newValue = event.target.value;

    if (newValue < 1000) {
      setUserValue(newValue);
    } else {
      newValue = 1000;
      newValue = newValue.toLocaleString();
      setUserValue(newValue);
    }
  };

  const dropDownHandler = (event) => {
    const selectValue = event.target.value;
    setDropDownValue(selectValue);
    setTabMenu(tabArr.filter((tab) => tab !== selectValue));
    setCurrentTab(tabArr[0]);
  };

  const tabBtnHandler = (event) => {
    const selectTab = event.target.value;
    setCurrentTab(selectTab);
  };

  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2"; // .env로 관리
  const getCurrency = async () => {
    const json = await (
      await fetch(
        `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
      )
    ).json();
    setExchangeRate(json.quotes);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar
          getValueHandler={getValueHandler}
          userValue={userValue}
          dropDownHandler={dropDownHandler}
        />
        <Tab
          userValue={isNaN(userValue) ? 1000 : userValue}
          tabMenu={tabMenu}
          exchangeRate={exchangeRate}
          dropDownValue={dropDownValue}
          tabBtnHandler={tabBtnHandler}
          currentTab={currentTab}
        />
      </div>
    </div>
  );
}

export default SecondCalc;
