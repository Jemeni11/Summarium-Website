import './App.css'

import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} themeHandler={switchTheme}/>
      <Body />
      <Footer />
    </div>
  )
}

export default App
