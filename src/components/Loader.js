import styled, { keyframes } from 'styled-components';


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`

const Loaderbar = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loader(){
    return(
        <Background>
            <Loaderbar></Loaderbar>
        </Background>
    )
}

export default Loader;