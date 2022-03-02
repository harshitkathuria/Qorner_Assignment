import React from "react";
import styles from "./Header.module.css";
import { BsYoutube } from "react-icons/bs";

const Header = ({ metadata }) => {
  return (
    <header className={styles.container}>
      <div className={styles.header_content}>
        <h1 style={{ margin: "40px 0" }}>
          Youtube Stats{" "}
          <span>
            <BsYoutube
              color="red"
              style={{ verticalAlign: "bottom", marginLeft: "5px" }}
              size={35}
            />
          </span>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={metadata.thumbnailUrl}
            alt="Thumbnail"
            className={styles.thumbnail}
          />
          <div className={styles.text}>
            <p>{metadata.channelName}</p>
            <div style={{ fontWeight: "bold" }}>
              <span>{metadata.subscribersCount / 100}K subscribers</span>
              <span style={{ margin: "0 5px" }}>.</span>
              <span>{metadata.videoCount} videos</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
