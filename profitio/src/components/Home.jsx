// Home.jsx - Enhanced with better content and personal story
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaEye } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Animations
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 80%,
      rgba(51, 208, 190, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  gap: 3rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6rem;
  }
`;

const TextSection = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  padding: 1.5rem;
  max-width: 700px;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Greeting = styled.div`
  font-size: 1.25rem;
  color: #33d0beff;
  margin-bottom: 1rem;
  font-family: "Fira Code", monospace;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 2rem);
  font-weight: 600;
  background: linear-gradient(135deg, #33d0beff 0%, #20b2ca 50%, #48d1e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
`;

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #33d0beff;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cbd5e0;
  line-height: 1.8;
  margin-bottom: 1.5rem;

  strong {
    color: #33d0beff;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  div {
    padding: 0.5rem 1rem;
    background: rgba(19, 177, 212, 0.1);
    border: 1px solid rgba(51, 208, 190, 0.3);
    border-radius: 25px;
    color: #33d0beff;
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(51, 208, 190, 0.2);
      box-shadow: 0 4px 12px rgba(51, 208, 190, 0.2);
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
`;

const ResumeButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  border: none;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(51, 208, 190, 0.4);
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(51, 208, 190, 0.6);
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(51, 208, 190, 0.1);
  border: 2px solid rgba(51, 208, 190, 0.3);
  color: #33d0beff;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(51, 208, 190, 0.2);
    border-color: rgba(51, 208, 190, 0.5);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 20px rgba(51, 208, 190, 0.3);
    color: #fff;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 350px; // smaller rectangle
  overflow: hidden;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
  border: 3px solid rgba(51, 208, 190, 0.3);
  box-shadow: 0 8px 32px rgba(51, 208, 190, 0.2);
  border-radius: 40px; // curved corners

  @media (min-width: 768px) {
    width: 250px;
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1);
    }
  }
`;

// Home Component
const Home = () => {
  const handleResumeClick = () => {
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1iCDrxeXZ_oqKYqxy1j_tnil9FMNFn_FI";

    window.open(
      "https://drive.google.com/file/d/1iCDrxeXZ_oqKYqxy1j_tnil9FMNFn_FI/preview",
      "_blank"
    );

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "UB_Resume.pdf"; // updated file name to UB
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <TextSection>
          <Greeting>👋 Hello, I'm</Greeting>
          <Title>Umadevi Bogathi</Title> {/* Updated logo/name */}
          <Subtitle>Full Stack Developer</Subtitle>
          <Description>
            I am a dedicated Full Stack Developer committed to building{" "}
            <strong>high-quality, scalable web applications</strong> using modern
            technologies. With strong expertise in both frontend and backend
            development, I design solutions that are{" "}
            <strong>efficient, user-friendly, and performance-driven</strong>. I
            have a keen interest in{" "}
            <strong>data structures, algorithms, and problem-solving</strong>,
            continually refining my skills to tackle complex challenges with
            precision and creativity.
          </Description>

          <TechStack>
            <div>Full Stack Development</div>
            <div>MERN Stack</div>
            <div>React & Node.js</div>
            <div>RESTful APIs</div>
            <div>Database Design</div>
            <div>Problem Solving</div>
          </TechStack>

          <BottomSection>
            <ResumeButton onClick={handleResumeClick}>
              <FaEye />
              <FaFileDownload />
              View & Download Resume
            </ResumeButton>

            <SocialIcons>
              <SocialIcon 
                href="https://github.com/umadevi-12" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://www.linkedin.com/in/umadevi-bogathi-58404b312/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="mailto:bogathiu@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </SocialIcon>
            </SocialIcons>
          </BottomSection>
        </TextSection>

        <ImageSection>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759465464/uma_photo_dcakkx.jpg"
              alt="UB - Full Stack Developer"
            />
          </ImageContainer>
        </ImageSection>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
