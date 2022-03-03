import React from "react";

const Summary = ({ summary }) => {
  const { subscribers, revenue, views } = summary;
  return (
    <div>
      <h2 className="primary-text" style={styles.heading}>
        Summary
      </h2>
      <p className="secondary" style={styles.secondary}>
        Jan 1 - 31, 2022
      </p>
      <div className="box" style={styles.box}>
        <div>
          <h3 className="secondary-text">Subscribers</h3>
          <p className="lead">{subscribers / 1000} K</p>
        </div>
        <div>
          <h3 className="secondary-text">Views</h3>
          <p className="lead">{views / 1000} K</p>
        </div>
        <div>
          <h3 className="secondary-text">Revenue</h3>
          <p className="lead">&#8377; {revenue} Lac</p>
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
    fontWeight: 600,
    marginBottom: "15px"
  },
  box: {
    display: "flex",
    justifyContent: "space-around"
  }
};

export default Summary;
