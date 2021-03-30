import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from  './pages/Home';
import {GlobalStyle, lightTheme, darkTheme} from './components/globalStyles';
import {ThemeIcon} from './components/ThemeIcon';
import {useDarkMode} from './components/ThemeMode';
import { ThemeProvider } from 'styled-components';


const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme


  return (
    <>
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar />
      <ThemeIcon theme={theme} toggleTheme={toggleTheme}/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </ThemeProvider>
    
    </>
  );
};

export default App;