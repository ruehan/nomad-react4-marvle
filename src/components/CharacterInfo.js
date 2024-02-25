import { useEffect, useState } from "react";
import { fetchCharactersInfo } from "../utils/api";
import styled from 'styled-components';
import Loader from "./Loader";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`

const Container = styled.div`
  max-width: 1500px;
  min-width: 600px;
  max-height: 50%;
  position: fixed;
  top: 52%;
  left: 50%;
  transform: translate(-55%, -50%);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  margin-right: 2rem; // 카드와 섹션 사이의 간격
  max-width: 600px;
  min-width: 400px;
  height: 100%;
  color: ${(props) => props.theme.text};
`;

const CardText = styled.p`
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-top: 0.5rem;
  overflow: scroll;
`;

const Section = styled.div`
  flex: 1;
  min-width: 400px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 8px;
  overflow: scroll;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 65vh;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;

`;

const Tab = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Button = styled.button`
    /* border: none; */
    border-radius: 10%;
    border-color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-size: 20px;
`

const Text = styled.p`
`

const CharacterInfo = ({ id, characterInfo, setCharacterInfo }) => {

    const [activeTab, setActiveTab] = useState('series');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    

    useEffect(() => {
        const fetchData = async () => {
            const character_info = await fetchCharactersInfo(id);
            setCharacterInfo(character_info.data.results[0]);
        } 
        
        fetchData();
    }, [])

    if (characterInfo.length === 0) {
        return <Loader />
    }
  
    return (
        <>
            <Background>
            <Container>
                <Card>
                    <Image src={`${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}`} alt={characterInfo.name} />
                    <h1>{characterInfo.name}</h1>
                    <CardText>
                        {characterInfo.description || 'No description available'}
                    </CardText>
                </Card>
                <Section>
                <Tab>
                    <Button onClick={() => handleTabClick('series')}>Series</Button>
                    <Button onClick={() => handleTabClick('comics')}>Comics</Button>
                    <Button onClick={() => handleTabClick('stories')}>Stories</Button>
                    <Button onClick={() => handleTabClick('events')}>Events</Button>
                </Tab>
                <div>
        {activeTab === 'series' && (
          <div>
            <h2>Series</h2>
            {characterInfo.series.items.slice(0, 10).map((serie, index) => (
              <Text key={index}>{serie.name}</Text>
            ))}
          </div>
        )}
        {activeTab === 'comics' && (
          <div>
            <h2>Comics</h2>
            {characterInfo.comics.items.slice(0, 10).map((comic, index) => (
              <Text key={index}>{comic.name}</Text>
            ))}
          </div>
        )}
        {activeTab === 'stories' && (
          <div>
            <h2>Stories</h2>
            {characterInfo.stories.items.slice(0, 10).map((story, index) => (
              <Text key={index}>{story.name}</Text>
            ))}
          </div>
        )}
        {activeTab === 'events' && (
          <div>
            <h2>Events</h2>
            {characterInfo.events.items.slice(0, 10).map((event, index) => (
              <Text key={index}>{event.name}</Text>
            ))}
          </div>
        )}
      </div>
                </Section>
            </Container>
            </Background>
        </>
    )
  };
  
  export default CharacterInfo;