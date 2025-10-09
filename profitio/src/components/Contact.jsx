// Contact.jsx - Decreased Font Sizes
import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Styled Components
const Section = styled.section`
  padding: 3rem 1rem;
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const Box = styled.div`
  background: rgba(26, 26, 46, 0.9);
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid rgba(51, 208, 190, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(51, 208, 190, 0.4);
    box-shadow: 0 12px 40px rgba(51, 208, 190, 0.2);
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 2rem; /* decreased from 2.5rem */
  font-weight: 700; /* slightly less bold */
  color: #33d0beff;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px; /* decreased width */
    height: 3px; /* decreased height */
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* slightly smaller gap */
  margin-bottom: 1rem; /* reduced margin */
  padding: 0.75rem; /* smaller padding */
  border-radius: 10px; /* slightly smaller */
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.05);

  &:hover {
    background: rgba(51, 208, 190, 0.1);
    transform: translateX(3px);
  }

  svg {
    font-size: 1.25rem; /* smaller icon */
    color: #33d0beff;
    flex-shrink: 0;
  }

  a,
  p {
    font-size: 0.9rem; /* smaller text */
    color: #e5e7eb;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: #33d0beff;
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* slightly smaller gap */
`;

const Heading = styled.h2`
  font-size: 1.8rem; /* decreased from 2.2rem */
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #e2e8f0;

  span {
    color: #33d0beff;
  }
`;

const Input = styled.input`
  padding: 0.9rem 1rem; /* reduced padding */
  border-radius: 10px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  outline: none;
  font-size: 0.95rem; /* smaller text */
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 3px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem; /* reduced padding */
  border-radius: 10px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  outline: none;
  min-height: 120px; /* slightly shorter */
  resize: vertical;
  font-size: 0.95rem; /* smaller text */
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 3px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  padding: 0.9rem 1.8rem; /* smaller button */
  border-radius: 10px;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 1rem; /* slightly smaller */
  font-family: inherit;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(51, 208, 190, 0.4);
  }

  svg {
    font-size: 1rem; /* smaller icon */
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem; /* smaller message */
  padding: 0.75rem;
  border-radius: 8px;
  background: ${(props) =>
    props.success ? "rgba(34, 197, 94, 0.1)" : "rgba(248, 113, 113, 0.1)"};
  color: ${(props) => (props.success ? "#22c55e" : "#f87171")};
  border: 1px solid
    ${(props) => (props.success ? "rgba(34, 197, 94, 0.3)" : "rgba(248, 113, 113, 0.3)")};
`;

const Contact = () => {
  const formRef = useRef();
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jii94tf",
        "template_b5wy8ni",
        formRef.current,
        "kH58J6-BhUffLq9kc"
      )
      .then(
        (result) => {
          setMsg("✅ Message sent successfully!");
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setMsg("❌ Failed to send message. Please try again.");
          setSuccess(false);
          console.error(error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        {/* Left: Contact Form */}
        <Box>
          <Form ref={formRef} onSubmit={sendEmail}>
            <Heading>
              Contact <span>Me</span>
            </Heading>

            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />

            <Button type="submit">
              <FaPaperPlane /> Send Message
            </Button>

            {msg && <Message success={success}>{msg}</Message>}
          </Form>
        </Box>

        {/* Right: Contact Info */}
        <Box>
          <Title>Get in Touch</Title>

          <Detail>
            <FaEnvelope />
            <a href="mailto:bogathiu@gmail.com">bogathiu@gmail.com</a>
          </Detail>

          <Detail>
            <FaPhoneAlt />
            <a href="tel:+919666002774">+91 9666002774</a>
          </Detail>

          <Detail>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/Anantapur,+Andhra+Pradesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anantapur, Andhra Pradesh
            </a>
          </Detail>

          <Detail>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/umadevi-bogathi-58404b312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </Detail>

          <Detail>
            <FaGithub />
            <a
              href="https://github.com/umadevi-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </Detail>
        </Box>
      </Container>
    </Section>
  );
};

export default Contact;
