import React from "react";
import styled, { keyframes } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "RecipeSharingPlatform_Food",
    deployedLink: "https://benevolent-froyo-5df7f2.netlify.app/",
    githubLink: "https://github.com/umadevi-12/RecipeSharingPlatform_Food",
    description: "A comprehensive platform for home chefs to share and discover recipes with advanced community features, meal planning, and AI-powered suggestions.",
    technologies: ["HTML", "CSS", "React", "Redux", "Express.js", "Firebase", "MongoDB"],
    features: [
      "Create, edit, and share recipes with images & videos",
      "Comment, rate, and favorite recipes with real-time updates",
      "Weekly meal planner with shopping list generation",
      "AI-powered recipe suggestions based on user preferences",
      "User authentication and profile management"
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759807754/Recipe_Sharing_and_4_more_pages_-_Person_1_-_Microsoft_Edge_2025-07-20_23-18-13_cwb1pf.mp4",
      thumbnail: "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509412/Screenshot_2025-10-03_220335_wces4w.jpg"
    },
    
  },
  {
    name: "Property Listing Platform",
    deployedLink: "https://wondrous-truffle-b8ccaa.netlify.app/",
    githubLink: "https://github.com/umadevi-12/Property-Listing-Platform",
    description: "A responsive real estate platform enabling users to browse, filter, and interact with property listings with advanced search capabilities and comparison tools.",
    technologies: ["HTML", "CSS", "React", "Redux", "JavaScript", "Firebase", "Google Maps API"],
    features: [
      "Advanced real-time search filters with location-based results",
      "Interactive property pages with high-quality images & virtual tours",
      "Favorites system and property comparison dashboard",
      "Responsive design optimized for all devices",
      "User reviews and rating system for properties"
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759809513/WhatsApp_Video_2025-10-07_at_09.25.21_f9a3ee34_jlomit.mp4",
      thumbnail: "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509536/Screenshot_2025-10-03_220615_ysl2fn.jpg"
    },
  },
  {
    name: "Virtual Classroom",
    deployedLink: "https://virtual-classroom-rkan.vercel.app",
    githubLink: "https://github.com/umadevi-12/Virtual_Classroom",
    description: "A comprehensive web-based virtual classroom solution featuring real-time video conferencing, interactive whiteboards, document sharing, and AI-powered analytics for remote learning environments.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "WebRTC", "Socket.io", "Node.js"],
    features: [
      "Real-time video conferencing with multi-participant grid layout",
      "Interactive whiteboard for collaborative drawing and annotations",
      "Document sharing and real-time chat with file support",
      "AI-powered participation insights and engagement analytics",
      "Screen sharing and recording capabilities"
    ],
    media: {
      type: "video",
      url: "https://res.cloudinary.com/dk8x0cl0c/video/upload/q_auto,f_auto/v1759809632/classes_wxh8t7.mp4",
      thumbnail: "https://res.cloudinary.com/dk8x0cl0c/image/upload/v1759509760/Screenshot_2025-10-03_221216_fli3lb.jpg"
    },
  }
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.section`
  padding: 4rem 2rem;
  background: transparent;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  color: #33d0beff;
  margin-bottom: 4rem;
  position: relative;

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
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

// Fixed: Use data attribute for animation delay
const ProjectItem = styled.article.attrs(props => ({
  'data-index': props['data-index'] || 0
}))`
  background: rgba(26, 26, 46, 0.9);
  border-radius: 25px;
  padding: 3.5rem;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(51, 208, 190, 0.15);
  transition: all 0.4s ease;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${props => (props['data-index'] || 0) * 0.1}s;
  animation-fill-mode: both;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: rgba(51, 208, 190, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(51, 208, 190, 0.25);
    background: rgba(26, 26, 46, 0.95);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  color: #e2e8f0;
  margin: 0;
  font-weight: 700;
  flex: 1;
  line-height: 1.2;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1.8rem;
  border-radius: 25px;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.15);
  color: #33d0beff;
  border: 2px solid rgba(51, 208, 190, 0.25);
  font-weight: 600;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: rgba(51, 208, 190, 0.25);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(51, 208, 190, 0.3);
    border-color: rgba(51, 208, 190, 0.4);
  }

  svg { font-size: 1rem; }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
  align-items: start;

  @media (max-width: 968px) { 
    grid-template-columns: 1fr; 
    gap: 2rem; 
  }
`;

const ProjectMedia = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  background: #1a1a2e;

  &:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 15px 35px rgba(51, 208, 190, 0.3); 
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  display: block;
  transition: transform 0.3s ease;
  background: #1a1a2e;

  ${ProjectMedia}:hover & { transform: scale(1.02); }
`;

const ProjectInfo = styled.div` 
  display: flex; 
  flex-direction: column; 
  gap: 1.5rem; 
`;

const FeaturesList = styled.ul` 
  list-style: none; 
  padding: 0; 
  margin: 0; 
`;

const FeatureItem = styled.li`
  color: #33d0beff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  position: relative;
  padding-left: 2rem;
  line-height: 1.5;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #33d0beff;
    font-size: 1.3rem;
    font-weight: bold;
  }

  strong { color: #e2e8f0; font-weight: 700; font-size: 1.1rem; }
`;

const ProjectDescription = styled.p`
  color: #a0aec0;
  font-size: 1.15rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
`;

const ChallengeSection = styled.div`
  background: rgba(51, 208, 190, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #33d0beff;
  margin: 1rem 0;
`;

const ChallengeTitle = styled.h4`
  color: #33d0beff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ChallengeText = styled.p`
  color: #cbd5e0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(51, 208, 190, 0.15);
`;

const TechLabel = styled.span` 
  color: #e2e8f0; 
  font-weight: 700; 
  font-size: 1.1rem; 
  white-space: nowrap; 
`;

const TechTags = styled.div` 
  display: flex; 
  flex-wrap: wrap; 
  gap: 0.8rem; 
  flex: 1; 
`;

const TechTag = styled.span`
  background: rgba(51,208,190,0.15);
  color: #33d0beff;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid rgba(51,208,190,0.2);
  transition: all 0.3s ease;

  &:hover { 
    background: rgba(51,208,190,0.25); 
    transform: translateY(-2px); 
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(51,208,190,0.4), transparent);
  margin: 3rem 0;
  opacity: 0.6;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <SectionTitle>Featured Projects</SectionTitle>

      <ProjectsList>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            {/* Fixed: Use data attribute instead of prop */}
            <ProjectItem data-index={index}>
              <ProjectHeader>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectLinks>
                  <LinkButton href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </LinkButton>
                  <LinkButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Source Code
                  </LinkButton>
                </ProjectLinks>
              </ProjectHeader>

              <ProjectContent>
                <ProjectMedia>
                  {project.media.type === 'image' ? (
                    <MediaImage src={project.media.url} alt={`${project.name} screenshot`} loading="lazy" />
                  ) : (
                    <video
                      src={project.media.url}
                      controls
                      autoPlay
                      loop
                      muted
                      poster={project.media.thumbnail}
                      style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "15px" }}
                      onCanPlay={(e) => { e.target.playbackRate = 2.0; }}
                    />
                  )}
                </ProjectMedia>

                <ProjectInfo>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  {project.features.length > 0 && (
                    <FeaturesList>
                      {project.features.map((feature, fIndex) => (
                        <FeatureItem key={fIndex}>{feature}</FeatureItem>
                      ))}
                    </FeaturesList>
                  )}

                  {project.challenges && (
                    <ChallengeSection>
                      <ChallengeTitle>Key Challenge & Solution:</ChallengeTitle>
                      <ChallengeText>{project.challenges}</ChallengeText>
                    </ChallengeSection>
                  )}
                </ProjectInfo>
              </ProjectContent>

              <TechStack>
                <TechLabel>Tech Stack:</TechLabel>
                <TechTags>
                  {project.technologies.map((tech, tIndex) => (
                    <TechTag key={tIndex}>{tech}</TechTag>
                  ))}
                </TechTags>
              </TechStack>
            </ProjectItem>

            {index < projects.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ProjectsList>
    </Container>
  );
};

export default Projects;