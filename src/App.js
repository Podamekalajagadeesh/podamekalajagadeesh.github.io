import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaEthereum, 
  FaChartLine, 
  FaReact, 
  FaDatabase, 
  FaShieldAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord
} from 'react-icons/fa';
import CircuitBackground from './CircuitBackground';
import './App.css';
import './zindex-fix.css';

function App() {
  const observerRef = useRef();

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleHireClick = () => {
    const email = 'podamekalajagadeesh@gmail.com';
    const subject = 'Web3 Development Opportunity';
    const body = 'Hi Jagadeesh,\n\nI would like to discuss a potential Web3 development project with you.\n\nBest regards,';
    
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleEmailClick = () => {
    const email = 'podamekalajagadeesh@gmail.com';
    window.open(`mailto:${email}`);
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Podamekalajagadeesh', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/podamekalajagadeesh', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    {
      icon: <FaCode />,
      title: "Smart Contracts",
      description: "Solidity, Hardhat, Foundry, OpenZeppelin, and advanced smart contract development with security best practices."
    },
    {
      icon: <FaEthereum />,
      title: "Blockchain Development",
      description: "Ethereum, Polygon, Layer 2 solutions, Web3.js, Ethers.js, and cross-chain interoperability."
    },
    {
      icon: <FaChartLine />,
      title: "DeFi & Protocols",
      description: "DEX development, yield farming, liquidity pools, and DeFi protocol integration and optimization."
    },
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React, Next.js, TypeScript, and modern web development with Web3 wallet integration."
    },
    {
      icon: <FaDatabase />,
      title: "Backend & Infrastructure",
      description: "Node.js, Express.js, MongoDB, GraphQL, IPFS, and scalable blockchain infrastructure development."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Testing",
      description: "Smart contract auditing, penetration testing, and comprehensive security analysis for Web3 applications."
    },
    {
      icon: <FaGithub />,
      title: "Version Control & Collaboration",
      description: "Git, GitHub, GitLab, collaborative development workflows, code review, and open-source contribution practices."
    }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React featuring a stunning neon blur glass theme and smooth animations.",
      tech: ["React", "CSS", "JavaScript", "Responsive"],
      link: "#"
    },
    {
      title: "Coming Soon: DeFi Project",
      description: "An innovative DeFi application that will revolutionize yield farming and liquidity provision with advanced smart contract automation.",
      tech: ["Solidity", "React", "Hardhat", "Web3.js"],
      link: "#"
    },
    {
      title: "Coming Soon: NFT Collection",
      description: "A unique NFT collection with generative art and utility features, built on Ethereum with advanced metadata management.",
      tech: ["ERC-721", "IPFS", "Solidity", "Generative Art"],
      link: "#"
    }
  ];

  return (
    <div className="App">
      {/* Animated Circuit Background */}
      <CircuitBackground />
      
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jagadeesh.dev
          </motion.div>
          <div className="nav-links">
            {['about', 'skills', 'projects', 'contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <section className="hero" id="about">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img 
              src="portfolio.png" 
              alt="Jagadeesh" 
              className="profile-img"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h1>Jagadeesh</h1>
            <h2>Web3 Developer & Blockchain Engineer</h2>
            <div className="tech-symbols">
              <motion.div 
                className="symbol-container"
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="react-symbol" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)"/>
                  <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(0 50 50)"/>
                  <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(60 50 50)"/>
                  <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" transform="rotate(120 50 50)"/>
                </svg>
                <span>React</span>
              </motion.div>
              <motion.div 
                className="symbol-container"
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="ethereum-symbol" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,20 30,50 50,45 70,50" fill="var(--neon-cyan)"/>
                  <polygon points="50,45 30,50 50,80 70,50" fill="var(--neon-blue)"/>
                </svg>
                <span>Ethereum</span>
              </motion.div>
            </div>
            <p>
              Passionate about building the future of decentralized applications. 
              Specializing in smart contracts, DeFi protocols, and cutting-edge 
              blockchain solutions that drive innovation in the Web3 ecosystem.
            </p>
            <div className="cta-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={handleHireClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.a
                href="https://github.com/Podamekalajagadeesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-card glass fade-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card glass fade-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-secondary">
                  {project.title.includes('Coming Soon') ? 'Coming Soon' : 'View Project'}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Build The Future Together
          </motion.h2>
          <motion.div 
            className="contact-content glass fade-in"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Ready to bring your Web3 vision to life? I'm always excited to work 
              on innovative blockchain projects and collaborate with forward-thinking teams.
            </p>
            <div className="contact-info">
              <motion.div 
                className="contact-item"
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>podamekalajagadeesh@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                onClick={handleGitHubClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/Podamekalajagadeesh</p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                onClick={handleLinkedInClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/podamekalajagadeesh</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <motion.a 
            href="https://github.com/Podamekalajagadeesh" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/podamekalajagadeesh" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaDiscord />
          </motion.a>
        </div>
        <p>&copy; 2024 Jagadeesh. Building the future of Web3.</p>
      </footer>
    </div>
  );
}

export default App;
