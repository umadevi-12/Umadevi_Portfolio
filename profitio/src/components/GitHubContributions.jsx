import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 1rem;
  background: transparent;
  min-height: 65vh; /* decreased height */
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #33d0beff;
  margin: 1.5rem 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  max-width: 1200px;
`;

const FirstMainImage = styled.img`
  width: 70%;
  max-width: 650px;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 6px 25px rgba(51, 208, 190, 0.25);
  border: 2px solid rgba(51, 208, 190, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(51, 208, 190, 0.3);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatImage = styled.img`
  width: 100%;
  height: 230px; /* decreased height */
  max-width: 350px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 5px 18px rgba(51, 208, 190, 0.2);
  border: 2px solid rgba(51, 208, 190, 0.2);
  transition: all 0.3s ease;
  background: rgba(26, 26, 46, 0.8);
  padding: 0.4rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(51, 208, 190, 0.25);
  }
`;

const GitHubContributions = () => {
  return (
    <Container id="github">
      <Title>GitHub Submissions</Title>

      <ImageContainer>
        <FirstMainImage
          src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759497313/WhatsApp_Image_2025-10-03_at_15.06.50_ede73483_tnehp3.jpg"
          alt="GitHub Contributions"
        />

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
          <StatImage
            src="https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759497814/Screenshot_2025-10-03_185315_yxjytt.png"
            alt="GitHub Contribution 3"
          />
        </StatsContainer>
      </ImageContainer>
    </Container>
  );
};

export default GitHubContributions;