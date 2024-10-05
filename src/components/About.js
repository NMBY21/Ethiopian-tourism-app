import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/ethio.jpeg" alt="Ethiopian landscape" style={styles.image} />
      </div>
      <div style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/about" style={styles.navLink}>
          About
        </Link>
      </div>

      <h1 style={styles.title}>About Us</h1>
      <h2 style={styles.subtitle}>Ethiopian Tourism Agent</h2>

      <div style={styles.content}>
        <div style={styles.section}>
          <p>
            We specialize in providing unforgettable experiences across
            Ethiopia. From breathtaking landscapes to the country's rich
            cultural heritage, we curate personalized tours to immerse you in
            the beauty and history of Ethiopia.
          </p>
        </div>
        <div style={styles.section}>
          <p>
            Our dedicated team ensures that every detail of your journey is
            taken care of, making your experience seamless and enjoyable. We're
            here to help you explore the hidden gems of Ethiopia and create
            lasting memories.
          </p>
        </div>
      </div>

      <Link to="/" style={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "20px 0 0 0",
  },
  subtitle: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "20px",
  },
  section: {
    width: "45%",
    padding: "10px",
    textAlign: "left",
  },
  backButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default About;
