import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress,SiBootstrap } from 'react-icons/si';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26',  },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', },
  { name: 'React', icon: FaReact, color: '#61DAFB',  },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933',  },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', },
  { name: 'Express', icon: SiExpress, color: '#ffffff',},
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', },
];

const Container = styled.section`
  position: relative;
  padding: 1rem 0;
  background: transparent;
  min-height: 60vh;
  overflow: hidden;
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                 0 0 20px rgba(100, 255, 218, 0.3),
                 0 0 30px rgba(100, 255, 218, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.5),
                 0 0 30px rgba(100, 255, 218, 0.5),
                 0 0 40px rgba(100, 255, 218, 0.5);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * ${skills.length / 2}));
  }
`;

const SkillsTrack = styled.div`
  display: flex;
  width: calc(250px * ${skills.length});
  animation: ${scroll} 40s linear infinite;
  opacity: 0.9;

  &:hover {
    animation-play-state: paused;
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
`;

const shine = keyframes`
  0% {
    background-position: -100% 100%;
  }
  100% {
    background-position: 200% -100%;
  }
`;

const SkillCard = styled.div`
  flex: 0 0 220px;
  height: 250px;
  margin: 0 15px;
  background: rgba(17, 34, 64, 0.6);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(
    45deg,
    transparent 25%,
    rgba(100, 255, 218, 0.1) 50%,
    transparent 75%
  );
  background-size: 200% 200%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.2}s;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    border-color: rgba(100, 255, 218, 0.5);
    background-color: rgba(17, 34, 64, 0.9);
    animation: ${shine} 1.5s linear infinite;
    
    .icon {
      transform: scale(1.2) rotate(360deg);
    }

    .level {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #64ffda, #0a192f, #64ffda);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SkillIcon = styled.div`
  font-size: 4rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70px;
    height: 70px;
    background: radial-gradient(circle, ${props => props.color}20, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  &.icon {
    &:hover {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e6f1ff;
  margin: 0.5rem 0;
  text-align: center;
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: #64ffda;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  margin-top: 1rem;

  &.level {
    transition-delay: 0.1s;
  }
`;

const SkillsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  margin: 1rem 0;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Technical Expertise</Title>
      <SkillsContainer>
        <SkillsTrack>
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} $index={index}>
              <SkillIcon color={skill.color} className="icon">
                {React.createElement(skill.icon)}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsTrack>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;