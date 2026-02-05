import React from 'react';

const CircuitBackground = () => {
  return (
    <>
      <div className="circuit-dots">
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
        <div className="circuit-dot"></div>
      </div>
      
      <div className="circuit-lines">
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
      </div>
      
      {/* Background React Symbols */}
      <svg className="bg-react-symbol react-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(0 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(120 50 50)"/>
      </svg>
      <svg className="bg-react-symbol react-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(0 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(120 50 50)"/>
      </svg>
      <svg className="bg-react-symbol react-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(0 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(120 50 50)"/>
      </svg>

      {/* Background Ethereum Symbols */}
      <svg className="bg-ethereum-symbol eth-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,20 30,50 50,45 70,50" fill="var(--neon-cyan)"/>
        <polygon points="50,45 30,50 50,80 70,50" fill="var(--neon-blue)"/>
      </svg>
      <svg className="bg-ethereum-symbol eth-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,20 30,50 50,45 70,50" fill="var(--neon-cyan)"/>
        <polygon points="50,45 30,50 50,80 70,50" fill="var(--neon-blue)"/>
      </svg>
      <svg className="bg-ethereum-symbol eth-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,20 30,50 50,45 70,50" fill="var(--neon-cyan)"/>
        <polygon points="50,45 30,50 50,80 70,50" fill="var(--neon-blue)"/>
      </svg>
      

    </>
  );
};

export default CircuitBackground;
