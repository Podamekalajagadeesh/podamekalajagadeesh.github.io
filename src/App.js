
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
  FaLinkedin
} from 'react-icons/fa';

import { SiFigma } from 'react-icons/si';
import CircuitBackground from './CircuitBackground';

import './App.css';
import './zindex-fix.css';

function App() {
  const observerRef = useRef();

  useEffect(() => {
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
    const body =
      'Hi Jagadeesh,\n\nI would like to discuss a potential Web3 development project with you.\n\nBest regards,';

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:podamekalajagadeesh@gmail.com';
  };

  const handleGitHubClick = () => {
    window.open(
      'https://github.com/Podamekalajagadeesh',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleLinkedInClick = () => {
    window.open(
      'https://www.linkedin.com/in/podamekalajagadeesh/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Updated skills; original card design remains unchanged.
  const skills = [
    {
      icon: <FaCode />,
      title: 'Smart Contract Development',
      description:
        'Solidity, Hardhat, OpenZeppelin, contract deployment, testing, and Ethereum smart contract development.'
    },
    {
      icon: <FaEthereum />,
      title: 'Blockchain Development',
      description:
        'Ethereum, Sepolia testnet, EVM-based applications, contract interaction, and blockchain transactions.'
    },
    {
      icon: <FaChartLine />,
      title: 'DeFi & dApps',
      description:
        'Decentralized applications, crowdfunding platforms, token vesting, contribution tracking, and refund workflows.'
    },
    {
      icon: <FaReact />,
      title: 'Frontend Development',
      description:
        'HTML, CSS, JavaScript, React, Next.js, Vite, responsive interfaces, and interactive web applications.'
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Development',
      description:
        'Node.js, Express.js, PostgreSQL, Prisma, REST APIs, and backend integration for decentralized applications.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Testing & Security',
      description:
        'Hardhat tests, smart contract verification workflows, OpenZeppelin libraries, and validation of contract behavior.'
    },
    {
      icon: <FaGithub />,
      title: 'Tools & Development',
      description:
        'Git, GitHub, Hardhat, npm, Vercel, blockchain explorers, and collaborative development workflows.'
    },
    {
      icon: <SiFigma />,
      title: 'Web3 UI/UX',
      description:
        'Clean interfaces, responsive layouts, wallet connection flows, transaction feedback, and user-friendly dApp experiences.'
    }
  ];

  // Real projects replace the previous placeholder cards.
  const projects = [
    {
      title: 'Web3 Crowdfunding dApp',
      description:
        'A decentralized crowdfunding platform where users can create campaigns, contribute ETH, track campaign goals and deadlines, and use the contract withdrawal and refund flows.',
      tech: [
        'Solidity',
        'React',
        'Vite',
        'ethers.js',
        'Hardhat',
        'MetaMask',
        'Sepolia'
      ],
      link: 'https://github.com/Podamekalajagadeesh/crowdfunding-dapp',
      demo: 'https://crowdfunding-dapp-lilac.vercel.app/'
    },
    {
      title: 'TokenVest — Token Vesting dApp',
      description:
        'A token vesting application with cliff and linear vesting schedules, token claims, revocation functionality, and separate administrator and employee workflows.',
      tech: [
        'Solidity',
        'OpenZeppelin',
        'Hardhat',
        'React',
        'Vite',
        'ethers.js',
        'MetaMask'
      ],
      link: 'https://github.com/Podamekalajagadeesh/token-vesting-dapp',
      demo: 'https://tokenvest-bice.vercel.app'
    },
    {
      title: 'FundChain',
      description:
        'A crowdfunding application combining a web interface, backend APIs, PostgreSQL data storage, and Ethereum smart contracts for campaign creation, contributions, withdrawals, and refunds.',
      tech: [
        'Next.js',
        'React',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'Solidity',
        'ethers.js'
      ],
      link: 'https://github.com/Podamekalajagadeesh/Fundchain',
      demo: 'https://fundchain-theta-kohl.vercel.app'
    }
  ];

  return (
    <div className="App">
      {/* Original animated background */}
      <CircuitBackground />

      {/* Original navigation */}
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
        {/* Original hero layout */}
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
              transition={{ type: 'spring', stiffness: 300 }}
            />

            <h1>Jagadeesh</h1>
            <h2>Web3 Developer & Blockchain Engineer</h2>

            <div className="tech-symbols">
              <motion.div
                className="symbol-container"
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="react-symbol"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)" />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="30"
                    ry="8"
                    fill="none"
                    stroke="var(--neon-cyan)"
                    strokeWidth="2"
                    transform="rotate(0 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="30"
                    ry="8"
                    fill="none"
                    stroke="var(--neon-cyan)"
                    strokeWidth="2"
                    transform="rotate(60 50 50)"
                  />
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="30"
                    ry="8"
                    fill="none"
                    stroke="var(--neon-cyan)"
                    strokeWidth="2"
                    transform="rotate(120 50 50)"
                  />
                </svg>
                <span>React</span>
              </motion.div>

              <motion.div
                className="symbol-container"
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="ethereum-symbol"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="50,20 30,50 50,45 70,50"
                    fill="var(--neon-cyan)"
                  />
                  <polygon
                    points="50,45 30,50 50,80 70,50"
                    fill="var(--neon-blue)"
                  />
                </svg>
                <span>Ethereum</span>
              </motion.div>
            </div>

            <p>
              I build blockchain-powered applications and smart contracts
              focused on practical Web3 use cases. My projects include
              decentralized crowdfunding, token vesting, and full-stack
              applications integrated with Ethereum wallets.
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

        {/* Original skills section and card classes */}
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

        {/* Original projects section and card classes */}
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
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>

                <a
                  href={project.demo}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '8px' }}
                >
                  Live Demo
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Original contact section */}
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
              I’m interested in Web3 development opportunities, blockchain
              projects, and collaborating with teams building useful
              decentralized applications.
            </p>

            <div className="contact-info">
              <motion.div
                className="contact-item"
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="contact-icon" />
                <p>podamekalajagadeesh@gmail.com</p>
              </motion.div>

              <motion.div
                className="contact-item"
                onClick={handleGitHubClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="contact-icon" />
                <p>github.com/Podamekalajagadeesh</p>
              </motion.div>

              <motion.div
                className="contact-item"
                onClick={handleLinkedInClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="contact-icon" />
                <p>linkedin.com/in/podamekalajagadeesh</p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Original footer styling */}
      <footer>
        <div className="social-links">
          <motion.a
            href="https://github.com/Podamekalajagadeesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/podamekalajagadeesh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        <p>
          &copy; {new Date().getFullYear()} Jagadeesh. Building the future of
          Web3.
        </p>
      </footer>
    </div>
  );
}

export default App;
