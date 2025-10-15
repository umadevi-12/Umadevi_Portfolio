import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CertificatesSection = styled.section`
  padding: 2rem 1rem; /* reduced */
  min-height: auto; /* no forced full-screen */
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #33d0beff;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  font-weight: 800;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1.5rem;
`;

const CertificateCard = styled.div`
  background: rgba(26, 26, 46, 0.9);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1.5px solid rgba(51, 208, 190, 0.2);
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.4s ease forwards;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(51, 208, 190, 0.4);
    box-shadow: 0 10px 25px rgba(51, 208, 190, 0.25);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Organization = styled.h3`
  color: #33d0beff;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Course = styled.h4`
  color: #e2e8f0;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #a0aec0;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  svg { margin-right: 0.4rem; color: #33d0beff; }
`;

const Description = styled.p`
  color: #cbd5e0;
  line-height: 1.4;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const LearningList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: #cbd5e0;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 0.95rem;

  svg {
    color: #33d0beff;
    margin-right: 0.6rem;
    margin-top: 0.15rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #33d0beff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.6rem 1rem;
  border: 1.5px solid rgba(51, 208, 190, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.1);

  &:hover {
    color: #fff;
    background: rgba(51, 208, 190, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(51, 208, 190, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

// Certificates Data
const certificates = [
  {
    organization: "Infosys Foundation",
    course: "Youth Skilling Program",
    period: "Issued 2024",
    description:
      "Completed training in full-stack development, soft skills, and industry readiness through Infosys Foundation’s youth program.",
    learnings: [
      "Mastered modern full-stack technologies",
      "Improved soft skills & professional communication",
      "Worked on real-world team projects",
    ],
    certificateLink: "https://drive.google.com/file/d/1Sij0gR2xwBCsyuvorbRlQLQR0QN-_w8I/preview",
  },
  {
    organization: "Cisco Networking Academy",
    course: "Cybersecurity Essentials",
    period: "Issued 2024",
    description:
      "Learned key cybersecurity concepts, risk management, and security best practices for digital asset protection.",
    learnings: [
      "Applied cryptography & network defense strategies",
      "Understood ethical hacking & vulnerability testing",
      "Built secure system configurations",
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
              <div>
                <Organization>
                  <FaBriefcase /> {cert.organization}
                </Organization>
                <Course>{cert.course}</Course>
                <Timeline>
                  <FaCalendarAlt /> {cert.period}
                </Timeline>
              </div>
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
              <FaExternalLinkAlt /> View Certificate
            </CertificateLink>
          </CertificateCard>
        ))}
      </CertificatesGrid>
    </Container>
  </CertificatesSection>
);

export default Certificates;