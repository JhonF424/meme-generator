import './App.css';
import React, { useEffect, useState } from "react";
import html2canvas from 'html2canvas';
function App() {

  //Hooks
  const [firstLine, setFirstLine] = useState('');
  const [secondLine, setSecondLine] = useState('');
  const [image, setImage] = useState('');

  const onChangeFirstLine = function (evt) {
    setFirstLine(evt.target.value);
  }

  const onChangeSecondLine = function (evt) {
    setSecondLine(evt.target.value);
  }

  const onChangeImage = function (evt) {
    setImage(evt.target.value);
  }

  const onClickExport = function (evt) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();

  });
  }


  return (
    <div className="App">
      <div className="container flex flex-col mx-auto mt-4 w-4/5 md:w-1/2">
        <div className="">
          <select onChange={onChangeImage} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline my-4">
            <option value="">Select an image</option>
            <option value="fire">Disaster Girl</option>
            <option value="futurama">Futurama</option>
            <option value="history">Aliens</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Filosoraptor</option>
            <option value="smart">Smart Guy</option>
          </select>
        </div>
        <input onChange={onChangeFirstLine} className="input-form" type="text" placeholder="First Text"></input>
        <input onChange={onChangeSecondLine} className="input-form" type="text" placeholder="Second Text"></input>
        <button onClick={onClickExport} className="button-form">Generate meme</button>

        <div id="meme" className="text-gray-700 mx-auto font-bold text-3xl">
          <span className="bg-white">{firstLine}</span>
          <span className="bg-white">{secondLine}</span>
          <img src={"/img/" + image + ".jpg"} alt="Meme Generator" className="" />
        </div>
      </div>
    </div>
  );
}

export default App;
