import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/ethio.jpeg" alt="Ethiopian landscape" style={styles.image} />
        <div style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </div>
      </div>
      <h1 style={styles.title}>Explore Ethiopia</h1>
      <p>
        Discover the hidden gems of Ethiopia where ancient history meets
        stunning landscapes. From the towering peaks of the Simien Mountains to
        the majestic rock-hewn churches of Lalibela, Ethiopia offers an
        unforgettable journey filled with rich culture and natural beauty.
      </p>
      <Link to="/about">
        <button style={styles.button}>Learn More</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
  },
  title: {
    fontSize: "3rem",
    marginTop: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  nav: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    gap: "10px",
    zIndex: "10",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "5px 10px",
    borderRadius: "5px",
  },
};

export default Home;
