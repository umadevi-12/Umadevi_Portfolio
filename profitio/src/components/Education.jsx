// Education.jsx - Compact Layout (Removed Top Space)
import React from 'react';
import { FaGraduationCap, FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const educationData = [
  {
    period: "2025",
    degree: "Full-Stack Development",
    institution: "Masai School",
    icon: FaLaptopCode,
  },
  {
    period: "2023 - 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "Madanapalle Institute of Technology & Science",
    icon: FaUserGraduate,
  },
  {
    period: "2020 - 2023",
    degree: "Bachelor of Science (B.Sc) Computer Science",
    institution: "Sri Sai Baba National Degree College",
    icon: FaUserGraduate,
  },
  {
    period: "2020",
    degree: "Intermediate",
    institution: "SLN Junior College",
    icon: FaGraduationCap,
  },
  {
    period: "2018",
    degree: "SSC",
    institution: "Secondary School",
    icon: FaGraduationCap,
  }
];

const Container = styled.section`
  position: relative;
  padding: 1rem 1rem 2.5rem; /* ⬅ Removed extra top space */
  background: transparent;
  min-height: 70vh; /* ⬅ Slightly reduced height */
  display: flex;
  align-items: flex-start; /* start instead of center */
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 100%;
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 8px rgba(51,208,190,0.3), 0 0 16px rgba(51,208,190,0.3); }
  50% { text-shadow: 0 0 12px rgba(51,208,190,0.5), 0 0 20px rgba(51,208,190,0.5); }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 1.2rem;
  margin-top: 0; /* ⬅ No top margin */
  position: relative;
  animation: ${glow} 3s ease-in-out infinite;

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
    font-size: 1.9rem;
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #33d0beff;
  z-index: 1;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  z-index: 2;
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  position: relative;
`;

const TimelineIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(26, 26, 46, 0.9);
  border: 2px solid #33d0beff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #33d0beff;
  z-index: 3;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
`;

const EducationContent = styled.div`
  background: rgba(26, 26, 46, 0.85);
  border-radius: 10px;
  padding: 0.6rem 0.8rem;
  border: 1px solid rgba(51,208,190,0.3);
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(51,208,190,0.6);
    background: rgba(26, 26, 46, 0.95);
    box-shadow: 0 4px 12px rgba(51,208,190,0.15);
  }
`;

const Period = styled.div`
  font-size: 0.68rem;
  font-weight: 600;
  color: #33d0beff;
  margin-bottom: 0.25rem;
  background: rgba(51,208,190,0.1);
  padding: 0.12rem 0.4rem;
  border-radius: 8px;
  border: 1px solid rgba(51,208,190,0.2);
  display: inline-block;
`;

const Degree = styled.h3`
  font-size: 0.88rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.2rem;
  line-height: 1.2;
`;

const Institution = styled.p`
  font-size: 0.78rem;
  color: #a0aec0;
  margin: 0;
  font-weight: 500;
`;

const Education = () => {
  return (
    <Container id="education">
      <ContentWrapper>
        <Title>Education</Title>
        <TimelineWrapper>
          <TimelineLine />
          <EducationList>
            {educationData.map((edu, index) => (
              <EducationItem key={index}>
                <TimelineIcon>{React.createElement(edu.icon)}</TimelineIcon>
                <EducationContent>
                  <Period>{edu.period}</Period>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                </EducationContent>
              </EducationItem>
            ))}
          </EducationList>
        </TimelineWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Education;