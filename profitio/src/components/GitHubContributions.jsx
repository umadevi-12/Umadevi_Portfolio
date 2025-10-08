// GitHubContributions.jsx - Adjusted Image Sizes
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #33d0beff;
  margin: 4rem 0 2rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1800px;
`;

// First main image - bigger
const FirstMainImage = styled.img`
  width: 85%;
  max-width: 1000px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 14px 48px rgba(51, 208, 190, 0.3);
  border: 2px solid rgba(51, 208, 190, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 52px rgba(51, 208, 190, 0.35);
    border-color: rgba(51, 208, 190, 0.4);
  }
`;

// Last main image - smaller
const LastMainImage = styled.img`
  width: 70%;
  max-width: 700px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(51, 208, 190, 0.25);
  border: 2px solid rgba(51, 208, 190, 0.25);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(51, 208, 190, 0.3);
    border-color: rgba(51, 208, 190, 0.3);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`;

const StatImage = styled.img`
  flex: 1 1 400px;
  max-width: 650px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(51, 208, 190, 0.2);
  border: 2px solid rgba(51, 208, 190, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(51, 208, 190, 0.3);
    border-color: rgba(51, 208, 190, 0.3);
  }
`;

const GitHubContributions = () => {
  return (
    <Container id="github">
      <Title>GitHub Submissions</Title>
      
      <ImageContainer>
        {/* First Main Image - Bigger */}
        <FirstMainImage
          src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759497313/WhatsApp_Image_2025-10-03_at_15.06.50_ede73483_tnehp3.jpg"
          alt="GitHub Contributions"
        />

        {/* GitHub Stats Section */}
        <SectionTitle>GitHub Stats</SectionTitle>

        <StatsContainer>
          <StatImage
            src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759552394/Screenshot_2025-10-04_095922_rzce9u.png"
            alt="GitHub Contribution 1"
          />
          <StatImage
            src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759552363/Screenshot_2025-10-04_095941_k5u98t.png"
            alt="GitHub Contribution 2"
          />
        </StatsContainer>

        {/* Last Main Image - Smaller */}
        <LastMainImage
          src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759497814/Screenshot_2025-10-03_185315_yxjytt.png"
          alt="GitHub Contributions Screenshot"
        />
      </ImageContainer>
    </Container>
  );
};

export default GitHubContributions;
