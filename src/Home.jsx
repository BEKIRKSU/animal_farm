import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    
    navigate('/platform');
  };

 const handleDemoClick = () => {
    navigate('/demo');
};

    return (
        <div className="homePage">
            <main className="content">
              <div className="typewriter">
                <h1>Welcome to Bekir's Citflik.</h1>
                <p>Embark on a journey of deep practice with us, overcoming initial challenges to attain coding expertise.</p>
                </div>
               <div className="button-group">
          <button onClick={handleGetStartedClick} className="journey-on-button">
            Volunteer
          </button>
          <button onClick={handleDemoClick} className="demo-button">Manager</button>
        </div>
            </main>
        </div>
    );
}


export default Home;