import React, { useState } from "react";
import ResponsiveAppBar from "./appbar";
import Footer from "./Footer";
import { Box, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // New state for success dialog
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    degree: "",
    jobExperience: "",
    contactTime: "",
    resume: null,
    selectedProject: "",
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);

    // Save the form data to localStorage
    const savedApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    savedApplications.push(formData);  // Add new application data
    localStorage.setItem("jobApplications", JSON.stringify(savedApplications));  // Save updated data

    // Close the form modal and open the success dialog
    setOpenModal(false);
    setOpenSuccessDialog(true); // Show success dialog
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  return (
    <div>
      <ResponsiveAppBar />

      {/* Video Section at the Top */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          
        </Box>
      </Box>

      {/* Projects Information */}
      <Box sx={{ padding: "40px 20px", backgroundColor: "#ffffff" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#388E3C",
            fontWeight: "bold",
          }}
        >
          We Empower Businesses to Achieve Transformative Outcomes
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
          Using our expertise, data becomes a trusted asset that increases productivity, speed of deployment, user experience, workflow, and AI-powered insights.
          Discover what our AI Data Services have accomplished.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                01. AI DATA EXTRACTION
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                Using AI, we optimise the acquisition of image and text from multiple sources. Techniques include onsite scanning, drone photography, negotiation with archives, and the formation of alliances with corporations, religious organisations, and governments.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                02. MACHINE LEARNING ENABLEMENT
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                From simple data to deep learning, our data solutions are highly flexible and can enable a wide variety of ML systems, no matter how complex the model.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: "30px" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                03. GENEALOGY
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                Powered by AI, Lifewood processes genealogical material at speed and scale, to conserve and illuminate family histories, national archives, corporate records and registers in any language, age or condition.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                04. NATURAL LANGUAGE PROCESSING
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                We have partnered with some of the world’s most advanced companies in NLP development. With a managed workforce that spans the globe, we offer solutions in over 50 language capabilities.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: "30px" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                05. AI-ENABLED CUSTOMER SERVICE
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                AI-enabled customer service is now the quickest and most effective route for institutions to deliver personalized, proactive experiences that drive customer engagement.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" sx={{ color: "#388E3C", fontWeight: "bold", marginBottom: "10px" }}>
                06. COMPUTER VISION
              </Typography>
              <Typography variant="body1" sx={{ color: "#6F4F31", marginBottom: "10px" }}>
                Training AI to see and understand the world requires a high volume of quality training data. Lifewood provides total data solutions for your CV development from collection to annotation to classification and more, for video and image datasets.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "18px",
            color: "green",
          }}
        >
         <b> No one makes new discoveries by standing still.</b>
        </Typography>
        

        {/* Green Button */}
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "green",
              padding: "12px 25px",
              fontSize: "18px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "brown",
              },
            }}
            onClick={handleOpenModal}
          >
            <b>Poke Me And Choose Your Destiny</b>
          </Button>
          <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "18px",
            color: "green",
          }}
        >
         <b> Be Amazed </b>
        </Typography>
        </Box>  
      </Box>
      

      {/* Modal for Job Application Form */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Job Application</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginBottom: "16px" }}>
            <InputLabel>Choose Project</InputLabel>
            <Select
              name="selectedProject"
              value={formData.selectedProject}
              onChange={handleFormChange}
              label="Choose Project"
            >
              <MenuItem value="AI Data Extraction">AI Data Extraction</MenuItem>
              <MenuItem value="Machine Learning Enablement">Machine Learning Enablement</MenuItem>
              <MenuItem value="Genealogy">Genealogy</MenuItem>
              <MenuItem value="NLP">Natural Language Processing</MenuItem>
              <MenuItem value="AI Customer Service">AI-Enabled Customer Service</MenuItem>
              <MenuItem value="Computer Vision">Computer Vision</MenuItem>
              <MenuItem value="Autonomous Driving">Autonomous Driving Technology</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleFormChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleFormChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Degree"
            name="degree"
            value={formData.degree}
            onChange={handleFormChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Relevant Job Experience"
            name="jobExperience"
            multiline
            rows={4}
            value={formData.jobExperience}
            onChange={handleFormChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Convenient Time to Contact"
            name="contactTime"
            value={formData.contactTime}
            onChange={handleFormChange}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Upload Resume"
            name="resume"
            type="file"
            onChange={handleFileChange}
            sx={{ marginBottom: "16px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your job application has been successfully submitted!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
