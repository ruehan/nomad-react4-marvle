import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkMode } from '../utils/atom';
import { MdLightMode, MdModeNight } from "react-icons/md";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
`

const SearchInput = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  /* margin-bottom: 1rem; */
  box-sizing: border-box;
  position: fixed;
  top: 80px;
  left: 25%;
`;

function SearchBar({searchQuery, setSearchQuery}) {

  return (
    <Background>
        <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a character...">
        </SearchInput>
    </Background>
  );
}

export default SearchBar;
