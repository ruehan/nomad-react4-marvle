import { useEffect, useState } from "react";
import { fetchCharactersInfo } from "../utils/api";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from "./Loader";

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`

const Container = styled.div`
  max-width: 1500px;
  min-width: 600px;
  max-height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  min-width:300px;
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
  min-width: 300px;
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

const CharacterInfo = ({ id, characterInfo, setCharacterInfo }) => {

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
                    <div>
                        <h2>Series</h2>
                        {characterInfo.series.items.slice(0, 5).map((serie, index) => (
                            <div key={index}>{serie.name}</div>
                        ))}
                        </div>
                
                        <div>
                        <h2>Comics</h2>
                        {characterInfo.comics.items.slice(0, 5).map((comic, index) => (
                            <div key={index}>{comic.name}</div>
                        ))}
                        </div>
                
                        <div>
                        <h2>Stories</h2>
                        {characterInfo.stories.items.slice(0, 5).map((story, index) => (
                            <div key={index}>{story.name}</div>
                        ))}
                        </div>

                        <div>
                        <h2>Events</h2>
                        {characterInfo.events.items.slice(0, 5).map((event, index) => (
                            <div key={index}>{event.name}</div>
                        ))}
                </div>
                </Section>
            </Container>
            </Background>
        </>
    )
  };
  
  export default CharacterInfo;