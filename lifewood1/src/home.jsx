import React, { useState, useEffect, useRef } from "react";
import ResponsiveAppBar from "./appbar";
import CardComponent from "./CardComponent";
import { Box } from "@mui/material";
import Footer from "./Footer"; 
import CountUp from "react-countup"; 
import './Home.css';

const Home = () => {
  const [key, setKey] = useState(0);
  const [showText, setShowText] = useState(false);
  const [resetCount, setResetCount] = useState(false); // New state for resetting the counter
  const textRef = useRef(null); // Reference for the transforming text
  const counterRef = useRef(null); // Reference for the counting section

  useEffect(() => {
    // Set up Intersection Observer for the transforming text
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowText(true); // Show text when it's in view
        } else {
          setShowText(false); // Hide text when it's out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Set up Intersection Observer for the counting section
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResetCount(true); // Reset counter when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the counter section is visible
      }
    );

    // Start observing elements
    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    if (counterRef.current) {
      counterObserver.observe(counterRef.current);
    }

    // Clean up observers on unmount
    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (counterRef.current) {
        counterObserver.unobserve(counterRef.current);
      }
    };
  }, []);

  // Re-trigger CountUp reset based on the `resetCount` state
  useEffect(() => {
    if (resetCount) {
      setKey((prevKey) => prevKey + 1); // Increment key to reset CountUp
      setResetCount(false); // Reset the resetCount flag
    }
  }, [resetCount]);

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", position: "relative" }}>
      <ResponsiveAppBar />

      {/* Main Content */}
      <h1 style={{ color: "#388E3C", fontWeight: "bold" }}>
        <center>WELCOME TO LIFEWOOD</center>
      </h1>
      <div style={{ margin: "20px" }}>
        {/* Video Section */}
        <Box sx={{ width: "100%", height: "50vh", mt: 4 }}>
          <video
            src="/lifewood video.mp4" // Path to your video in the public folder
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* AI-driven Solutions Section */}
        <h2 style={{ color: "#388E3C", fontWeight: "bold" }}>
          What We Do: AI-driven Solutions
        </h2>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <CardComponent
            title="AI Model Training"
            description="Optimize AI models for better performance."
            image="/training.png"
            expandedContent="We specialize in training AI models with large, diverse datasets to ensure optimal performance in real-world applications."
            sx={{ maxWidth: "200px", flex: "1 1 200px" }}
          />
          <CardComponent
            title="Data Processing"
            description="Efficiently convert raw data into actionable insights."
            image="/dataprocessing.jpg"
            expandedContent="Our data processing services help you make sense of large datasets by cleaning, transforming, and analyzing them to extract valuable insights."
            sx={{ maxWidth: "200px", flex: "1 1 200px" }}
          />
          <CardComponent
            title="AI-driven Innovation"
            description="Develop cutting-edge solutions using AI technology."
            image="/solution.jpg"
            expandedContent="We create innovative AI solutions that push the boundaries of what's possible, helping businesses stay ahead in a rapidly evolving technological landscape."
            sx={{ maxWidth: "200px", flex: "1 1 200px" }}
          />
        </Box>

        {/* Add more space between cards and front page image */}
        <Box sx={{ marginBottom: "40px" }}></Box>

        {/* Front Page Image */}
        <Box sx={{ width: "100%", height: "65vh", mb: 4, margin: "0 auto" }}>
          <img
            src="/frontpage2.jpeg"
            alt="Front Page"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Lifewood's Global Reach Section */}
        <h1 style={{ color: "#388E3C", fontWeight: "bold", textAlign: "center" }}>
          Lifewood's Global Reach
        </h1>

        {/* Transforming Text Section - Appears when scrolled into view */}
        <div ref={textRef} style={{ marginTop: "40px" }}>
          {showText && (
            <div className="transforming-text">
              <h2>TRANSFORMING</h2>
              <h2>DATA ON A GLOBAL</h2>
              <h2>SCALE</h2>
              <p>
                Lifewood, active in 16 countries from locations as diverse as Benin and Britain,
                Singapore and Seattle, drives ever forward, igniting a culture of innovation, building
                bridges and forming new friendships in the ceaseless motion of business and the
                unlimited possibilities of AI and GPT - creating dynamic opportunities and prosperous
                communities around the world.
              </p>
            </div>
          )}
        </div>

        {/* Map Image */}
        <Box sx={{ width: "100%", height: "40vh", mb: 4 }}>
          <img
            src="/map.png"
            alt="Global Map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Global Reach Details Section - Counting Digits */}
        <div ref={counterRef}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", mb: 4 }}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold" }}>Devoted Specialists:</h3>
              <CountUp
                key={key}
                start={0}
                end={34738}
                duration={3}
                style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold" }}>Delivery Sites:</h3>
              <CountUp
                key={key}
                start={0}
                end={25}
                duration={3}
                style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold" }}>Countries:</h3>
              <CountUp
                key={key}
                start={0}
                end={16}
                duration={3}
                style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: "bold" }}>Languages:</h3>
              <CountUp
                key={key}
                start={0}
                end={50}
                duration={3}
                style={{ fontSize: "40px", fontWeight: "bold", color: "#388E3C" }}
              />
            </div>
          </Box>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
