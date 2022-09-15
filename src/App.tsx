import { useState } from 'react';
import './App.css';
import Article from './components/Article';

function App() {
  const [theme, setTheme] = useState('theme-dark');
  return (
    <div className="App">
      <button
        className="px-5 py-2 bg-secondary rounded-xl m-2"
        onClick={() => {
          setTheme('theme-light');
        }}
      >
        light
      </button>
      <button
        className="px-5 py-2 bg-secondary rounded-xl m-2"
        onClick={() => {
          setTheme('theme-dark');
        }}
      >
        dark
      </button>
      <button
        className="px-5 py-2 bg-secondary rounded-xl m-2"
        onClick={() => {
          setTheme('theme-solar');
        }}
      >
        solar
      </button>
      <button
        className="px-5 py-2 bg-secondary rounded-xl m-2"
        onClick={() => {
          setTheme('theme-evergreen');
        }}
      >
        evergreen
      </button>
      <div className="min-h-full grid grid-cols-1 gap-5">
        <Article theme={theme} />
      </div>
    </div>
  );
}

export default App;
