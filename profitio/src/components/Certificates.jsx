import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CertificatesSection = styled.section`
  padding: 3rem 1.5rem;
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
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #33d0beff;
  font-size: 2.5rem; // decreased
  margin-bottom: 3rem; // decreased
  position: relative;
  font-weight: 800;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px; // smaller
    height: 4px; // smaller
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    &::after { width: 100px; bottom: -10px; }
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // smaller
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 1.5rem; }
`;

const CertificateCard = styled.div`
  background: rgba(26,26,46,0.9);
  border-radius: 15px; // smaller
  padding: 2rem; // smaller
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(51,208,190,0.2);
  backdrop-filter: blur(8px);
  animation: ${fadeInUp} 0.5s ease forwards;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-5px); // smaller hover
    border-color: rgba(51,208,190,0.4);
    box-shadow: 0 15px 35px rgba(51,208,190,0.25);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const CertificateInfo = styled.div` flex: 1; `;

const Organization = styled.h3`
  color: #33d0beff;
  font-size: 1.6rem; // smaller
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem; // smaller
  font-weight: 700;
`;

const Course = styled.h4`
  color: #e2e8f0;
  font-size: 1.2rem; // smaller
  margin-bottom: 0.8rem;
  font-weight: 550;
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #a0aec0;
  margin-bottom: 1rem; // smaller
  font-size: 1rem; // smaller
  font-weight: 500;

  svg { margin-right: 0.5rem; color: #33d0beff; }
`;

const Description = styled.p`
  color: #cbd5e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem; // smaller
`;

const LearningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: #cbd5e0;
  margin-bottom: 0.8rem; // smaller
  line-height: 1.5;
  svg { color: #33d0beff; margin-right: 0.75rem; margin-top: 0.2rem; }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; // smaller
  color: #33d0beff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem; // smaller
  padding: 0.8rem 1.5rem; // smaller
  border: 2px solid rgba(51,208,190,0.3);
  border-radius: 10px; // smaller
  transition: all 0.3s ease;
  background: rgba(51,208,190,0.1);

  &:hover {
    color: #fff;
    background: rgba(51,208,190,0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(51,208,190,0.3);
    border-color: rgba(51,208,190,0.5);
  }

  @media (max-width: 768px) { width: 100%; justify-content: center; }
`;

// Certificates Data
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
