import "./App.css";
import { useState, useEffect } from "react";
import Conditional from "./components/Conditional";
import Header from "./components/Header/Header";
import Summary from "./components/Summary";

function App() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const res = await fetch(
      "https://qorner-mock-server.herokuapp.com/stats?startDate=2021-01-01&endDate=2021-01-31"
    );
    const resData = await res.json();
    setData(resData);
    console.log(resData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Conditional showIf={data.metadata}>
      <div className="App">
        <Header metadata={data.metadata} />
        <div style={{ margin: "0 10px" }}>
          <Summary summary={data.summary} />
        </div>
      </div>
    </Conditional>
  );
}

export default App;
