import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Info } from '@mui/icons-material';
import Logo from './logo.png';

const AboutUs = () => {
  const location = useLocation();

  return (
    <div>
      <AppBar position="static" className="header" elevation={0}>
        <Toolbar className="nav-bar">
          <img src={Logo} alt="Logo" className="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className="association-text">ACBIOS</span>
          </Typography>
          {location.pathname !== '/' && (
            <Button color="inherit" component={Link} to="/">Home</Button>
          )}
          <Button color="inherit" component={Link} to="/about">
            <Info /> About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            <Mail /> Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Container>
          <Typography variant="h2" gutterBottom>About Us</Typography>
          <Typography variant="body1" paragraph>
            ACBIOS is short for biological association of ananda collage.it's one of the best in srilanka and offers students lots of chances to paticipate in competitions and experimants.
          </Typography>
           <hr></hr>
          <Typography variant="body1" paragraph>
           if you are  Whether a student or a teacher intersted in biologdy this is the perfect association.
          </Typography>
          <hr></hr>
          <Typography variant="body1">
           our goal is to proteact the nature and thrive with it.
          </Typography>
        </Container>
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
}

export default AboutUs;
