import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
  background-color: ${(props) => props.theme.body};
  /* margin-top: 2rem; */
  
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subheader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #424242;
  color: ${(props) => props.theme.text};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #616161;
  color: ${(props) => props.theme.text};
`;

const AboutPage = () => {
  return (
    <Background>
        <AboutContainer>
      <Header>About Marvel Characters</Header>
      
      <Section>
        <Subheader>The Project</Subheader>
        <Paragraph>
        This project was created as a graduation project for the Nomad Coders React course. The goal of the project was to create a web application using React and the Marvel API. The application allows users to search for Marvel characters and view information about them, including their name, description, and a list of comics they have appeared in.
        </Paragraph>
      </Section>
      
    </AboutContainer>
    </Background>
  );
};

export default AboutPage;
