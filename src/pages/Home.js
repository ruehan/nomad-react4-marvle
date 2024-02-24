import { useEffect, useState } from "react";

import Character from "../components/Character";

function Home(){

    const [characters, setCharacters] = useState([]);

    return(
        <>
            <Character characters={characters} setCharacters={setCharacters}/>
        </>
    )
}

export default Home;