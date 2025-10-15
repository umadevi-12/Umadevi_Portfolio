import React from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "RecipeSharingPlatform_Food",
    deployedLink: "https://benevolent-froyo-5df7f2.netlify.app/",
    githubLink: "https://github.com/umadevi-12/RecipeSharingPlatform_Food",
    description:
      "A comprehensive platform for home chefs to share and discover recipes with advanced community features, meal planning, and AI-powered suggestions.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Express.js",
      "Firebase",
      "MongoDB",
    ],
    features: [
      "Create, edit, and share recipes with images & videos",
      "Comment, rate, and favorite recipes with real-time updates",
      "Weekly meal planner with shopping list generation",
      "AI-powered recipe suggestions based on user preferences",
      "User authentication and profile management",
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759807754/Recipe_Sharing_and_4_more_pages_-_Person_1_-_Microsoft_Edge_2025-07-20_23-18-13_cwb1pf.mp4",
      thumbnail:
        "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509412/Screenshot_2025-10-03_220335_wces4w.jpg",
    },
  },
  {
    name: "Property Listing Platform",
    deployedLink: "https://wondrous-truffle-b8ccaa.netlify.app/",
    githubLink: "https://github.com/umadevi-12/Property-Listing-Platform",
    description:
      "A responsive real estate platform enabling users to browse, filter, and interact with property listings with advanced search capabilities and comparison tools.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "JavaScript",
      "Firebase",
      "Google Maps API",
    ],
    features: [
      "Advanced real-time search filters with location-based results",
      "Interactive property pages with high-quality images & virtual tours",
      "Favorites system and property comparison dashboard",
      "Responsive design optimized for all devices",
      "User reviews and rating system for properties",
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759809513/WhatsApp_Video_2025-10-07_at_09.25.21_f9a3ee34_jlomit.mp4",
      thumbnail:
        "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509536/Screenshot_2025-10-03_220615_ysl2fn.jpg",
    },
  },
  {
    name: "Virtual Classroom",
    deployedLink: "https://virtual-classroom-rkan.vercel.app",
    githubLink: "https://github.com/umadevi-12/Virtual_Classroom",
    description:
      "A comprehensive web-based virtual classroom solution featuring real-time video conferencing, interactive whiteboards, document sharing, and AI-powered analytics for remote learning environments.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "WebRTC",
      "Socket.io",
      "Node.js",
    ],
    features: [
      "Real-time video conferencing with multi-participant grid layout",
      "Interactive whiteboard for collaborative drawing and annotations",
      "Document sharing and real-time chat with file support",
      "AI-powered participation insights and engagement analytics",
      "Screen sharing and recording capabilities",
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759809632/classes_wxh8t7.mp4",
      thumbnail:
        "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509760/Screenshot_2025-10-03_221216_fli3lb.jpg",
    },
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.section`
  padding: 1.5rem 1rem;
  background: transparent;
  min-height: 65vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.article.attrs((props) => ({
  "data-index": props["data-index"] || 0,
}))`
  background: rgba(26, 26, 46, 0.9);
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid rgba(51, 208, 190, 0.15);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${(props) => (props["data-index"] || 0) * 0.1}s;
  animation-fill-mode: both;

  &:hover {
    border-color: rgba(51, 208, 190, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(51, 208, 190, 0.2);
    background: rgba(26, 26, 46, 0.95);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #e2e8f0;
  margin: 0;
  font-weight: 700;
  text-align: center;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.7rem;
  border-radius: 10px;
  font-size: 0.75rem;
  text-decoration: none;
  background: rgba(51, 208, 190, 0.15);
  color: #33d0beff;
  border: 1px solid rgba(51, 208, 190, 0.25);
  font-weight: 600;
  justify-content: center;

  &:hover {
    background: rgba(51, 208, 190, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(51, 208, 190, 0.3);
  }

  svg {
    font-size: 0.7rem;
  }
`;

const ProjectMedia = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const MediaImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.6rem;
`;

const ProjectDescription = styled.p`
  color: #a0aec0;
  font-size: 0.8rem;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  color: #33d0beff;
  margin-bottom: 0.3rem;
  font-size: 0.75rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.2;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #33d0beff;
    font-size: 0.8rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(51, 208, 190, 0.15);
  margin-top: 0.5rem;
`;

const TechLabel = styled.span`
  color: #e2e8f0;
  font-weight: 700;
  font-size: 0.8rem;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const TechTag = styled.span`
  background: rgba(51, 208, 190, 0.15);
  color: #33d0beff;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  border: 1px solid rgba(51, 208, 190, 0.2);
`;

const Projects = () => {
  return (
    <Container id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem key={index} data-index={index}>
            <ProjectHeader>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectLinks>
                <LinkButton href={project.deployedLink} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </LinkButton>
                <LinkButton href={project.githubLink} target="_blank">
                  <FaGithub /> Code
                </LinkButton>
              </ProjectLinks>
            </ProjectHeader>

            <ProjectMedia>
              {project.media.type === "image" ? (
                <MediaImage src={project.media.url} alt={project.name} />
              ) : (
                <video
                  src={project.media.url}
                  controls
                  autoPlay
                  loop
                  muted
                  poster={project.media.thumbnail}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  onCanPlay={(e) => {
                    e.target.playbackRate = 2.0;
                  }}
                />
              )}
            </ProjectMedia>

            <ProjectInfo>
              <ProjectDescription>{project.description}</ProjectDescription>
              <FeaturesList>
                {project.features.slice(0, 3).map((f, i) => (
                  <FeatureItem key={i}>{f}</FeatureItem>
                ))}
              </FeaturesList>
            </ProjectInfo>

            <TechStack>
              <TechLabel>Tech Stack:</TechLabel>
              <TechTags>
                {project.technologies.slice(0, 4).map((t, i) => (
                  <TechTag key={i}>{t}</TechTag>
                ))}
                {project.technologies.length > 4 && (
                  <TechTag>+{project.technologies.length - 4}</TechTag>
                )}
              </TechTags>
            </TechStack>
          </ProjectItem>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;