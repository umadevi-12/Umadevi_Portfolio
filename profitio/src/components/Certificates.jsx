import React from "react";
import styled, { keyframes } from "styled-components";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaCheckCircle,
    FaExternalLinkAlt,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CertificatesSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #33d0beff;
  font-size: 3.5rem;
  margin-bottom: 4rem;
  position: relative;
  font-weight: 800;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;

    &::after {
      width: 100px;
      bottom: -12px;
    }
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CertificateCard = styled.div`
  background: rgba(26, 26, 46, 0.9);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(51, 208, 190, 0.2);
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease forwards;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(51, 208, 190, 0.4);
    box-shadow: 0 20px 40px rgba(51, 208, 190, 0.25);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 15px;
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CertificateInfo = styled.div`
  flex: 1;
`;

const Organization = styled.h3`
  color: #33d0beff;
  font-size: 2rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    gap: 0.75rem;
  }
`;

const Course = styled.h4`
  color: #e2e8f0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #a0aec0;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;

  svg {
    margin-right: 0.75rem;
    color: #33d0beff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  color: #cbd5e0;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const LearningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: #cbd5e0;
  margin-bottom: 1rem;
  line-height: 1.6;

  svg {
    color: #33d0beff;
    margin-right: 1rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #33d0beff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: 2px solid rgba(51, 208, 190, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.1);

  &:hover {
    color: #fff;
    background: rgba(51, 208, 190, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(51, 208, 190, 0.3);
    border-color: rgba(51, 208, 190, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;

// ✅ UPDATED Certificates Data with better descriptions
const certificates = [
    {
        organization: "Infosys Foundation",
        course: "Youth Skilling Program",
        period: "Issued 2024",
        description: "Completed intensive training in full-stack development, soft skills, and industry readiness through Infosys Foundation's comprehensive youth empowerment program.",
        learnings: [
            "Mastered full-stack development with modern technologies",
            "Developed professional soft skills and communication abilities",
            "Gained hands-on experience with real-world projects",
            "Enhanced problem-solving and teamwork capabilities"
        ],
        certificateLink: "https://drive.google.com/file/d/1Sij0gR2xwBCsyuvorbRlQLQR0QN-_w8I/preview",
    },
    {
        organization: "Cisco Networking Academy",
        course: "Cybersecurity Essentials",
        period: "Issued 2024",
        description: "Acquired fundamental cybersecurity knowledge including threat identification, risk management, and security protocols to protect digital assets.",
        learnings: [
            "Implemented cryptography and network security protocols",
            "Practiced ethical hacking concepts and vulnerability assessment",
            "Mastered secure system configuration and data protection",
            "Developed cybersecurity risk management strategies"
        ],
        certificateLink: "https://drive.google.com/file/d/1L1YyDWb0rSlnuoAoHh9TXArwHXTKwqIq/preview",
    },
];

const Certificates = () => (
    <CertificatesSection id="certificates">
        <Container>
            <SectionTitle>Certifications</SectionTitle>
            <CertificatesGrid>
                {certificates.map((cert, index) => (
                    <CertificateCard key={index}>
                        <CertificateHeader>
                            <CertificateInfo>
                                <Organization>
                                    <FaBriefcase />
                                    {cert.organization}
                                </Organization>
                                <Course>{cert.course}</Course>
                                <Timeline>
                                    <FaCalendarAlt />
                                    {cert.period}
                                </Timeline>
                            </CertificateInfo>
                        </CertificateHeader>

                        <Description>{cert.description}</Description>

                        <LearningList>
                            {cert.learnings.map((learning, idx) => (
                                <LearningItem key={idx}>
                                    <FaCheckCircle />
                                    {learning}
                                </LearningItem>
                            ))}
                        </LearningList>

                        <CertificateLink
                            href={cert.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt />
                            View Certificate
                        </CertificateLink>
                    </CertificateCard>
                ))}
            </CertificatesGrid>
        </Container>
    </CertificatesSection>
);

export default Certificates;