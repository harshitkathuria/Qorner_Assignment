import React from "react";
import Chart from "./Chart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useVisibilityHook } from "react-observer-api";

const ReachEngagement = ({ reachEngagement }) => {
  const { setElement, isVisible } = useVisibilityHook({
    threshold: 0.4
  });
  const {
    value,
    change: { percentage, info },
    data
  } = reachEngagement;
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 className="primary-text" style={styles.heading}>
        Reach & Engagement
      </h2>
      <p className="secondary" style={styles.secondary}>
        Jan 1 - 31, 2022
      </p>
      <div className="box">
        <h3 className="secondary-text" style={{ marginBottom: "0.5rem" }}>
          Views
        </h3>
        <p
          className="lead"
          style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}
        >
          {value / 1000} <span style={{ fontSize: "1.1rem" }}>K</span>
        </p>
        <p style={styles.percentage}>{percentage} % </p>
        <p style={styles.info}>{info}</p>
        <div className="chart_wrapper" ref={setElement}>
          {isVisible ? (
            <Chart dataSet={data} />
          ) : (
            <Skeleton count={1} height={"200px"} duration={1.7} />
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    margin: "20px 0 5px 0"
  },
  secondary: {
    marginBottom: "15px"
  },
  percentage: {
    color: "red"
  },
  info: {
    position: "absolute",
    top: "115px",
    left: "90px",
    backgroundColor: "#EBFFF7",
    padding: "9px",
    borderRadius: "3px",
    fontSize: "0.9rem"
  }
};

export default ReachEngagement;
