import "./App.css";
import { useState, useEffect } from "react";
import Conditional from "./components/Conditional";
import Header from "./components/Header/Header";
import Summary from "./components/Summary";
import Revenue from "./components/Revenue";
import ReachEngagement from "./components/ReachEngagement";
import Audience from "./components/Audience";

function App() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const res = await fetch(
      "https://qorner-mock-server.herokuapp.com/stats?startDate=2021-01-01&endDate=2021-01-31"
    );
    const resData = await res.json();
    setData(resData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Conditional showIf={data.metadata}>
      <div className="App">
        <Header metadata={data.metadata} />
        <div style={{ margin: "0 25px" }}>
          <Summary summary={data.summary} />
          <Revenue revenue={data.revenueDetails?.estimatedRevenueTrend} />
          <ReachEngagement
            reachEngagement={data.reachAndEngagementDetails?.viewsTrend}
          />
          <Audience
            reachEngagement={
              data.audienceDetails?.viewsSubscriberVsNonSubscribersTrend
            }
          />
        </div>
      </div>
    </Conditional>
  );
}

export default App;
