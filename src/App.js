import React, { Component } from "react";
import './App.css';
import NavBar from './Components/navBar';
import LandingPage from './Components/landingPage';
import Footer from './Components/footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
