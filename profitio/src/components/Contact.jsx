// Contact.jsx — Compact Height Version
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

const Section = styled.section`
  padding: 2rem 1rem; /* reduced padding */
  background: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 70vh; /* reduced height */
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px; /* slightly narrower */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem; /* reduced gap */
  position: relative;
  z-index: 1;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const Box = styled.div`
  background: rgba(26, 26, 46, 0.9);
  padding: 1.5rem; /* reduced padding */
  border-radius: 16px;
  border: 2px solid rgba(51, 208, 190, 0.2);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(51, 208, 190, 0.4);
    box-shadow: 0 10px 30px rgba(51, 208, 190, 0.2);
    transform: translateY(-3px);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #33d0beff;
  margin-bottom: 1.2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #33d0beff, transparent);
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(51, 208, 190, 0.05);

  &:hover {
    background: rgba(51, 208, 190, 0.1);
    transform: translateX(2px);
  }

  svg {
    font-size: 1.1rem;
    color: #33d0beff;
  }

  a,
  p {
    font-size: 0.85rem;
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
  gap: 0.8rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #e2e8f0;

  span {
    color: #33d0beff;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 2px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(55, 65, 81, 0.5);
  border: 2px solid rgba(75, 85, 99, 0.5);
  color: white;
  min-height: 100px;
  resize: vertical;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #33d0beff;
    box-shadow: 0 0 0 2px rgba(51, 208, 190, 0.2);
    background: rgba(55, 65, 81, 0.7);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.4rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #33d0beff, #20b2ca);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-top: 0.8rem;

  &:hover {
    background: linear-gradient(135deg, #20b2ca, #33d0beff);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(51, 208, 190, 0.4);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.6rem;
  border-radius: 6px;
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
        () => {
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
              <FaPaperPlane /> Send
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