import { useState } from "react";

import Character from "../components/Character";
import SearchBar from "../components/SearchBar";

function Home(){

    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <Character characters={characters} setCharacters={setCharacters} searchQuery={searchQuery}/>
        </>
    )
}

export default Home;