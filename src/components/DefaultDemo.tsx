import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import './App.css';

function DefaultDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="mx-auto bg-muted flex justify-center gap-5 p-5 ">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo w-20" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react w-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-xl p-5 font-bold text-center ">Vite + React</h1>
      <div className="card text-center">
        <button
          className="px-5 py-2 text-xl font-bold my-5  border-2  border-pink-500 rounded-full"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-primary">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center pt-5">
        Click on the Vite and React logos to learn more
      </p>
      <br />
    </div>
  );
}

export default DefaultDemo;
