import './App.css';
import React, { useEffect, useState } from "react";
function App() {

  //Hooks
  const [firstLine, setFirstLine] = useState('');

  return (
    <div className="App">
      <div className="container flex flex-col mx-auto mt-4 w-4/5 md:w-1/2">
        <div className="">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline my-4">
            <option value="">Niña incendio</option>
            <option value="">Futurama</option>
            <option value="">Aliens</option>
            <option value="">Matrix</option>
            <option value="">Filosoraptor</option>
            <option value="">Smart Nigga</option>
          </select>
        </div>
        <input className="input-form" type="text" placeholder="First Text"></input>
        <input className="input-form" type="text" placeholder="Second Text"></input>
        <button className="button-form">Generate meme</button>

        <div>
          <span>First Line</span>
          <span>Second Line</span>
          <img src="" />
        </div>
      </div>
    </div>
  );
}

export default App;
