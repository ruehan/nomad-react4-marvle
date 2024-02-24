import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/api";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  z-index: 3;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;
  border: ${(props) => props.theme.border};
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px; 
  border-radius: 8px;
  object-fit: cover;
`;

const CardText = styled.p`
  color: ${(props) => props.theme.text};;
  text-align: center;
  margin-top: 0.5rem;
`;


const Character = ({ characters, setCharacters }) => {

    useEffect(() => {
        const fetchData = async () => {
            const character_data = await fetchCharacters(50);
            setCharacters(character_data.data.results);
        } 
        
        fetchData();
    }, [])

    if (characters.length === 0) {
        return <div>Loading</div>;
    }
  
    return (
       <>
         <Background>
         <Container>
            <Grid>
                {characters.map(character => (
                    <Link to={`/character/${character.id}`} key={character.id}>
                        <Card> 
                        <CardImage 
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}>

                        </CardImage>
                        <CardText>
                            {character.name}
                        </CardText>
                        </Card>
                    </Link>
                ))}
            </Grid>
         </Container>
         </Background>
       </>
    );
  };
  
  export default Character;