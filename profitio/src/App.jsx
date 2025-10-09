// App.jsx - Fixed spacing between sections
import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import GitHubContributions from "./components/GitHubContributions";
import { FaBars, FaTimes } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  button, a, input, textarea, select {
    border-radius: 12px;
    transition: box-shadow 0.18s ease, transform 0.12s ease;
    -webkit-tap-highlight-color: transparent;
  }

  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    box-shadow: none;
  }

  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(51, 208, 190, 0.18);
    border-radius: 12px;
  }

  button::-moz-focus-inner { border: 0; }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`;

const logoPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const Nav = styled.nav.attrs(props => ({
  'data-scrolled': props['data-scrolled'] ? 'true' : 'false'
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: ${props => 
    props['data-scrolled'] === 'true' ? "0 4px 20px rgba(51, 208, 190, 0.2)" : "none"};
  border-bottom: 1px solid rgba(51, 208, 190, 0.2);
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  animation: ${logoPulse} 2s infinite;
  cursor: pointer;

  img {
    height: 40px;
    width: auto;
    border-radius: 50%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: #33d0beff;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #33d0beff, #20b2ca);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const ResumeButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(51, 208, 190, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(51, 208, 190, 0.4);
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #33d0beff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div.attrs(props => ({
  'data-isopen': props['data-isopen'] ? 'true' : 'false'
}))`
  position: fixed;
  top: 0;
  right: ${props => props['data-isopen'] === 'true' ? "0" : "-100%"};
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  z-index: 999;
  border-left: 1px solid rgba(51, 208, 190, 0.2);
`;

const MobileNavLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  margin: 1.5rem 0;
  padding: 0.5rem 1rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #33d0beff;
  }
`;

const MobileResumeButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  padding: 0.8rem 2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #33d0beff;
`;

const Section = styled.section`
  padding: 1rem 0.5rem;
  margin-top: 3rem;
  scroll-margin-top: 3rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: transparent;

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem;
    margin-top: 2.5rem;
  }
`;

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Bogathi Umadevi - Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. View my portfolio projects and skills.';
    document.head.appendChild(metaDescription);

    document.title = 'Bogathi Umadevi - Full Stack Developer Portfolio';
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1iCDrxeXZ_oqKYqxy1j_tnil9FMNFn_FI/preview",
      "_blank"
    );

    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1iCDrxeXZ_oqKYqxy1j_tnil9FMNFn_FI";
    link.download = "Bogathi_Umadevi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <Container>
      <GlobalStyle />
      <Nav data-scrolled={scrolled}>
        <NavWrapper>
          <Logo href="#home" onClick={(e) => handleNavClick(e, "home")}>
            <img
              src="https://res.cloudinary.com/dumhixyxy/image/upload/u_rarvcl"
              alt="Umadevi Logo - Full Stack Developer"
            />
          </Logo>

          <NavLinks>
            <NavLink href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</NavLink>
            <NavLink href="#education" onClick={(e) => handleNavClick(e, "education")}>Education</NavLink>
            <NavLink href="#certificates" onClick={(e) => handleNavClick(e, "certificates")}>Certifications</NavLink>
            <NavLink href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</NavLink>
            <NavLink href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</NavLink>
            <NavLink href="#github" onClick={(e) => handleNavClick(e, "github")}>GitHub</NavLink>
            <NavLink href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</NavLink>
            <ResumeButton onClick={handleResumeClick}>📄 Resume</ResumeButton>
          </NavLinks>

          <MenuIcon onClick={toggleMobileMenu}>
            <FaBars />
          </MenuIcon>
        </NavWrapper>
      </Nav>

      <MobileMenu data-isopen={mobileMenuOpen}>
        <CloseIcon onClick={closeMobileMenu}>
          <FaTimes />
        </CloseIcon>
        {[
          "home",
          "education",
          "certificates",
          "projects",
          "skills",
          "github",
          "contact",
        ].map((id) => (
          <MobileNavLink
            key={id}
            href={`#${id}`}
            onClick={(e) => handleNavClick(e, id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </MobileNavLink>
        ))}
        <MobileResumeButton onClick={handleResumeClick}>
          📄 Resume
        </MobileResumeButton>
      </MobileMenu>

      <Section id="home">
        <Home />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="certificates">
        <Certificates />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="github">
        <GitHubContributions />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Container>
  );
};

export default App;