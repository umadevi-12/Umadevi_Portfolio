import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript, SiPostman, SiNetlify, SiNpm } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import styled, { keyframes } from 'styled-components';

const skillsData = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 88 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 75 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 85 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 70 },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 80 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 82 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 78 },
  { name: 'Express', icon: SiExpress, color: '#000000', level: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
];

const toolsData = [
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
  { name: 'VS Code', icon: DiVisualstudio, color: '#007ACC', level: 90 },
  { name: 'npm', icon: SiNpm, color: '#CB3837', level: 80 },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
  { name: 'Netlify', icon: SiNetlify, color: '#33d0beff', level: 85 },
];

const Container = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: transparent;
  min-height: 100vh;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
  &::before { top: 0; }
  &::after { bottom: 0; }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(51, 208, 190, 0.3),
                 0 0 20px rgba(51, 208, 190, 0.3),
                 0 0 30px rgba(51, 208, 190, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(51, 208, 190, 0.5),
                 0 0 30px rgba(51, 208, 190, 0.5),
                 0 0 40px rgba(51, 208, 190, 0.5);
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 3rem;
  position: relative;
  animation: ${glow} 3s ease-in-out infinite;

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
`;

const SectionContainer = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 2.5rem;
  position: relative;

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    padding: 0.5rem;
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

const SkillCard = styled.div`
  background: rgba(26, 26, 46, 0.8);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 2px solid rgba(51, 208, 190, 0.2);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.1}s;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    border-color: rgba(51, 208, 190, 0.5);
    background: rgba(26, 26, 46, 0.95);
    box-shadow: 0 15px 30px rgba(51, 208, 190, 0.2);
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SkillIcon = styled.div`
  font-size: 3.5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, ${props => props.color}20, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  ${SkillCard}:hover & {
    transform: scale(1.2) rotate(360deg);
  }
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0.5rem 0;
  text-align: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #33d0beff, #20b2ca);
  border-radius: 10px;
  width: ${props => props.$level}%;
  transition: width 1s ease-in-out;
`;

const SkillLevel = styled.span`
  font-size: 0.8rem;
  color: #33d0beff;
  font-weight: 600;
  margin-top: 0.3rem;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Technical Expertise</Title>

      {/* Skills Section */}
      <SectionContainer>
        <SectionTitle>Development Skills</SectionTitle>
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard key={`skill-${index}`} $index={index}>
              <SkillIcon color={skill.color}>
                {React.createElement(skill.icon)}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <ProgressFill $level={skill.level} />
              </ProgressBar>
              <SkillLevel>{skill.level}%</SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SectionContainer>

      {/* Tools Section */}
      <SectionContainer>
        <SectionTitle>Development Tools</SectionTitle>
        <SkillsGrid>
          {toolsData.map((tool, index) => (
            <SkillCard key={`tool-${index}`} $index={index}>
              <SkillIcon color={tool.color}>
                {React.createElement(tool.icon)}
              </SkillIcon>
              <SkillName>{tool.name}</SkillName>
              <ProgressBar>
                <ProgressFill $level={tool.level} />
              </ProgressBar>
              <SkillLevel>{tool.level}%</SkillLevel>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SectionContainer>
    </Container>
  );
};

export default Skills;