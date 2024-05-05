import React, { useState } from 'react';
import NavBar from './LandingPage/NavBar.jsx';
import Hero from './LandingPage/Hero.jsx';
import Login from './Accounts/Login.jsx';
import SignUpForm from './Accounts/SignUp.jsx';
import Footer from './LandingPage/Footer.jsx';
import './App.css';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleBackToHome = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <>
      <NavBar onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} onBackToHome={handleBackToHome} />
      {!showLogin && !showSignUp && <Hero onSignUpClick={handleSignUpClick} />}
      {showLogin && <Login onSignUpClick={handleSignUpClick} />}
      {showSignUp && <SignUpForm />}
      <Footer />
    </>
  );
}
