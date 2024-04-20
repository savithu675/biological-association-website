import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Info, Mail, ArrowForward } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import Logo from './logo.png'; 
import './home.css';

const Home = () => {
  const location = useLocation();

  return (
    <div className="home-container">
      <AppBar position="static" className="header" elevation={0}>
        <Toolbar className="nav-bar">
          <img src={Logo} alt="Logo" className="logo" /> 
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <span className="association-text">ACBIOS</span>
          </Typography>
          {location.pathname !== '/' && (
            <Button color="inherit" component={Link} to="/">Home</Button>
          )}
          <Button color="inherit" component={Link} to="/about" className="about-btn">
            <Info /> About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact" className="contact-btn">
            <Mail /> Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <div className="background-image">
        <div className="overlay">
          <h1 className="main-text">Welcome to the Biological Association of Ananda collage</h1>
          <h3 className="sub-text">special for Biology Enthusiasts</h3>
          <Button color="inherit" component={Link} to="/about" className="learn-more-btn">
            Learn More <ArrowForward />
          </Button>
        </div>
      </div>
      <footer className="footer">
        <Container>
          <Typography variant="body1" align="center" color="inherit">
            © 2024 Biological Association. Made with ❤️ by Savithu
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
