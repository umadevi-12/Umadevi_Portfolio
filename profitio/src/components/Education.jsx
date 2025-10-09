// Education.jsx - Minor spacing fix
import React from 'react';
import { FaGraduationCap, FaUserGraduate, FaLaptopCode } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const educationData = [
  {
    period: "2025",
    degree: "Full-Stack Development",
    institution: "Masai School",
    icon: FaLaptopCode,
    color:"#33d0beff"
  },
  {
    period: "2023 - 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "Madanapalle Institute of Technology & Science",
    icon: FaUserGraduate,
    color: "#33d0beff"
  },
  {
    period: "2020 - 2023",
    degree: "Bachelor of Science (B.sc) Computer Science",
    institution: "Sri Sai Baba National Degree College",
    icon: FaUserGraduate,
    color: "#33d0beff"
  },
  {
    period: "2020",
    degree: "Intermediate",
    institution: "SLN junior College",
    icon: FaGraduationCap,
    color: "#33d0beff"
  },
  {
    period: "2018",
    degree: "SSC",
    institution: "Secondary School",
    icon: FaGraduationCap,
    color: "#33d0beff"
  }
];

const Container = styled.section`
  position: relative;
  padding: 2rem 1rem;
  background: transparent;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;

const glow = keyframes`
  0%, 100% { text-shadow: 0 0 10px rgba(51,208,190,0.3), 0 0 20px rgba(51,208,190,0.3), 0 0 30px rgba(51,208,190,0.3); }
  50% { text-shadow: 0 0 15px rgba(51,208,190,0.5), 0 0 25px rgba(51,208,190,0.5), 0 0 35px rgba(51,208,190,0.5); }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 2rem;
  position: relative;
  animation: ${glow} 3s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 45px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #33d0beff;
  z-index: 1;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
`;

const EducationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const TimelineIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(26, 26, 46, 0.9);
  border: 2px solid #33d0beff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #33d0beff;
  z-index: 3;
  flex-shrink: 0;
`;

const EducationContent = styled.div`
  background: rgba(26, 26, 46, 0.8);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(51,208,190,0.3);
  transition: all 0.3s ease;
  flex: 1;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(51,208,190,0.6);
    background: rgba(26, 26, 46, 0.95);
    box-shadow: 0 8px 20px rgba(51,208,190,0.2);
  }
`;

const Period = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #33d0beff;
  margin-bottom: 0.4rem;
  background: rgba(51,208,190,0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  display: inline-block;
  border: 1px solid rgba(51,208,190,0.2);
`;

const Degree = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.2rem;
  line-height: 1.3;
`;

const Institution = styled.p`
  font-size: 0.9rem;
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
                <TimelineIcon>
                  {React.createElement(edu.icon)}
                </TimelineIcon>
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