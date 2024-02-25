import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/utils/theme';
import { darkMode } from '../src/utils/atom';
import Home from './pages/Home';
import CharacterInfoPage from './pages/CharacterInfoPage';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';



function App() {
  const [darkmode, setDarkmode] = useRecoilState(darkMode);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkmode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkmode);
  }, [darkmode]);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/character/:id" element={<CharacterInfoPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
