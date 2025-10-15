// Home.jsx - Reduced height version for better layout balance
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
  min-height: 85vh; /* ⬅ reduced from 100vh */
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

  @media (max-width: 768px) {
    min-height: auto;
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  gap: 2.5rem; /* slightly reduced */
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

const TextSection = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  padding: 1rem; /* smaller padding */
  max-width: 700px;
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Greeting = styled.div`
  font-size: 1.15rem;
  color: #33d0beff;
  margin-bottom: 0.8rem;
  font-family: "Fira Code", monospace;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 700;
  background: linear-gradient(135deg, #33d0beff 0%, #20b2ca 50%, #48d1e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.3rem;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 600;
  color: #33d0beff;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cbd5e0;
  line-height: 1.7;
  margin-bottom: 1.3rem;

  strong {
    color: #33d0beff;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  div {
    padding: 0.45rem 0.9rem;
    background: rgba(19, 177, 212, 0.1);
    border: 1px solid rgba(51, 208, 190, 0.3);
    border-radius: 25px;
    color: #33d0beff;
    font-size: 0.85rem;
    font-weight: 500;
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
  gap: 1.8rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ResumeButton = styled.button`
  padding: 0.9rem 1.8rem;
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
  box-shadow: 0 5px 18px rgba(51, 208, 190, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(51, 208, 190, 0.6);
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(51, 208, 190, 0.1);
  border: 2px solid rgba(51, 208, 190, 0.3);
  color: #33d0beff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(51, 208, 190, 0.2);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 20px rgba(51, 208, 190, 0.3);
    color: #fff;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 230px;
  height: 320px; /* reduced */
  overflow: hidden;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
  border: 3px solid rgba(51, 208, 190, 0.3);
  box-shadow: 0 6px 25px rgba(51, 208, 190, 0.2);
  border-radius: 35px;

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
    link.download = "UB_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <TextSection>
          <Greeting>👋 Hello, I'm</Greeting>
          <Title>Umadevi Bogathi</Title>
          <Subtitle>Full Stack Developer</Subtitle>
          <Description>
            I am a passionate <strong>Full Stack Developer</strong> committed to
            building <strong>high-quality, scalable web applications</strong> using
            modern technologies. I focus on crafting solutions that are{" "}
            <strong>efficient, user-friendly, and performance-driven</strong>.
            With a strong grasp of{" "}
            <strong>data structures, algorithms, and problem-solving</strong>, I
            continuously refine my skills to create impactful products.
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
              <SocialIcon href="https://github.com/umadevi-12" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/umadevi-bogathi-58404b312/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="mailto:bogathiu@gmail.com">
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