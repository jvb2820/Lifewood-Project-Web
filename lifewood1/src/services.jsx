import React, { useState } from "react";
import ResponsiveAppBar from "./appbar";
import Footer from "./Footer";
import { Box, Typography, Grid } from "@mui/material";
import { Flipper, Flipped } from "react-flip-toolkit";

const services = [
  {
    title: "Data Processing",
    shortDescription: "Efficiently convert raw data into usable insights.",
    detailedDescription:
      "We provide comprehensive data processing services, including data cleaning, transformation, and analysis to help businesses make data-driven decisions. This includes data acquisition, collection, annotation, curation, and validation.",
  },
  {
    title: "Genealogy",
    shortDescription: "Uncover and document your family’s history.",
    detailedDescription:
      "Our genealogy service helps trace and map out family lineages with detailed documentation, expert research, and creation of visual family trees. Rediscover your roots with precision and care.",
  },
  {
    title: "Prompt Engineering",
    shortDescription: "Optimize AI models with expertly crafted prompts.",
    detailedDescription:
      "Our prompt engineering services focus on designing effective prompts for AI applications, including generative models, chatbots, and other AI systems. We ensure optimal AI performance tailored to your needs.",
  },
  {
    title: "Data Annotation",
    shortDescription: "Enhance AI training with labeled data.",
    detailedDescription:
      "From image tagging to text labeling, our annotation services ensure your AI models are trained with high-quality, accurately labeled datasets for better performance.",
  },
  {
    title: "Data Validation",
    shortDescription: "Ensure data accuracy and reliability.",
    detailedDescription:
      "We offer robust data validation services to maintain data integrity, ensuring your datasets meet industry standards and application requirements.",
  },
];

const additionalServices = [
  "AI Model Training",
  "Data Training",
  "Vehicle AI Tracking",
  "Autonomous Driving",
  "And More!",
];

const Services = () => {
  const [flippedCards, setFlippedCards] = React.useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // List of random responses from the bot
  const randomResponses = [
    "I'm here to help! Can you tell me more about your query?",
    "That's interesting! Could you elaborate?",
    "I'm not sure about that. Could you ask something else?",
    "Let's dive deeper into that topic. What else can I assist with?",
    "I don't have an answer to that, but feel free to ask anything else!",
    "Could you clarify that for me? I'm a little confused.",
    "Hmm, that's a great question! Let me think about it...",
    "Could you ask in a different way? I'm struggling to understand.",
    "Thanks for sharing that! How can I help you further?",
    "That's a good point! I'm here to assist with any questions you have."
  ];

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSend = () => {
    const newMessage = { user: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    // Randomly select a response from the list
    const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

    const botMessage = { bot: randomResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div>
      <ResponsiveAppBar />
         {/* Chatbot Section */}
<Box
  sx={{
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  }}
>
  <Typography variant="h4" sx={{ marginBottom: "20px", color: "#388E3C" }}>
    Chat with Our AI Assistant
  </Typography>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Change to a beautiful font
    }}
  >
    <div>
      {messages.map((msg, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          {msg.user && (
            <div
              style={{
                textAlign: "left",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#6F4F31", // Color for the user message
              }}
            >
              User: {msg.user}
            </div>
          )}
          {msg.bot && (
            <div
              style={{
                textAlign: "left",
                fontSize: "16px",
                color: "#388E3C", // Green color for the bot response
                fontWeight: "normal",
                backgroundColor: "#E8F5E9", // Light green background for bot response
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                maxWidth: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: "break-word",
              }}
            >
              Bot: {msg.bot}
            </div>
          )}
        </div>
      ))}
    </div>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask me anything!"
      style={{
        padding: "10px",
        width: "80%",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Match input font
      }}
    />
    <button
      onClick={handleSend}
      style={{
        padding: "10px 20px",
        backgroundColor: "#388E3C",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Match button font
      }}
    >
      Send
    </button>
  </Box>
</Box>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#388E3C",
            fontWeight: "bold",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#6F4F31",
            fontSize: "18px",
          }}
        >
          Explore our wide range of services designed to meet your data and AI
          needs.
        </Typography>

        {/* Flipping Cards Section */}
        <Flipper flipKey={flippedCards}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Flipped flipId={`card-${index}`}>
                  <Box
                    onClick={() => handleCardClick(index)}
                    sx={{
                      width: "100%",
                      height: "200px",
                      perspective: "1000px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        transformStyle: "preserve-3d",
                        transform: flippedCards[index]
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                        transition: "transform 0.6s",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {/* Front Side */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "#388E3C",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          textAlign: "center",
                          padding: "10px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            textTransform: "uppercase",
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>

                      {/* Back Side */}
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "#6F4F31",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          transform: "rotateY(180deg)",
                          textAlign: "center",
                          padding: "10px",
                        }}
                      >
                        <Typography variant="body1">
                          {service.detailedDescription}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Flipped>
              </Grid>
            ))}
          </Grid>
        </Flipper>

        {/* More Services We Offer Section */}
        <Box
          sx={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#388E3C",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            More Services We Offer
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
              color: "#6F4F31",
              fontSize: "18px",
            }}
          >
            {additionalServices.map((service, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                {service}
              </Box>
            ))}
          </Box>
        </Box>
        {/* Video Section */}
        <Box
          sx={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          >
            <source src="/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Services;
