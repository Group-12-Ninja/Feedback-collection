import React from 'react';
import styles from "./Nav.module.css";

export default function NavBar({ onSignInClick, onSignUpClick, onBackToHome }){
    return(
        <nav className={styles.navEL}>
            <img onClick={onBackToHome}  src={"./src/assets/images/rocket.png"} alt="logo-img" className={styles.logo} href="#"/> 
            <h3 className={styles.Name} href="#" alt="company name">Orbit Opinions</h3>
            <div className={styles.serviceEL}>
                <button className={styles.listEl} alt="links">Product</button>
                <button className={styles.listEl} alt="links">Solutions</button>
                <button className={styles.listEl} alt="links">Company</button>
                <button className={styles.listEl} alt="links">Pricing</button>
            </div>
                <button onClick={onSignInClick} className={styles.signInBtn} alt="Sign in button">Sign in</button>
                <button onClick={onSignUpClick} className={styles.trialBtn} alt="free trial button">Start free trial</button>
        </nav>
    )
}
