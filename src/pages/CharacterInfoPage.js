import { useState } from "react";
import { useParams } from 'react-router-dom';
import CharacterInfo from "../components/CharacterInfo";

function CharacterInfoPage(){
    const { id } = useParams();
    const [characterInfo, setCharacterInfo] = useState([]);

    return(
        <>
            <CharacterInfo id={id} characterInfo={characterInfo} setCharacterInfo={setCharacterInfo}/>
        </>
    )
}

export default CharacterInfoPage;