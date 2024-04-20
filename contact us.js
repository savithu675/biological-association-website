import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Info, Email } from '@mui/icons-material';
import Logo from './logo.png';

const ContactUs = () => {
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
      <Container className="contact-cards-container">
        <Card className="contact-card">
          <CardContent>
            <Email className="contact-icon" />
            <Typography variant="h5" gutterBottom>
              example1@gmail.com
            </Typography>
            <Button variant="contained" color="primary" href="mailto:example1@gmail.com">Email</Button>
          </CardContent>
        </Card>
        <Card className="contact-card">
          <CardContent>
            <Email className="contact-icon" />
            <Typography variant="h5" gutterBottom>example2@gmail.com</Typography>
            <Button variant="contained" color="primary" href="mailto:example2@gmail.com">Email</Button>
          </CardContent>
        </Card>
        <Card className="contact-card">
          <CardContent>
            <Email className="contact-icon" />
            <Typography variant="h5" gutterBottom>example3@gmail.com</Typography>
            <Button variant="contained" color="primary" href="mailto:example3@gmail.com">Email</Button>
          </CardContent>
        </Card>
      </Container>
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

export default ContactUs;
