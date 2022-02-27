import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import { exchangeRateActions, tabActions } from "./store";
import Nav from "./components/Nav/Nav";
import FirstCalc from "./components/FirstCalc";
import SecondCalc from "./components/SecondCalc";

function App() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.input.currency);
  const activatedTab = useSelector((state) => state.tab.activatedTab);
  const isActivated = useSelector((state) => state.tab.isActivated);

  const apiKey = "8a221f0e3aca3ae326843617f093c585";

  const getCurrency = async () => {
    const json = await (
      await fetch(
        `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
      )
    ).json();
    dispatch(exchangeRateActions.getExchangeRate(json.quotes));
  };

  useEffect(() => {
    const arr = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
    dispatch(
      tabActions.changeTab(arr.filter((item) => item !== selectedCurrency))
    );
    getCurrency();
  }, [selectedCurrency, dispatch, activatedTab, isActivated]);

  return (
    <Fragment>
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<FirstCalc />} />
          <Route path={"/second"} element={<SecondCalc />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
