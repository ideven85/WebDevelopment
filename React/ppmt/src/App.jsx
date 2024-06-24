// import { Route, Routes } from "react-router-dom";
// import React from "react";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import img from './assets/coding.png';
function App() {
  let score=0;

  const handleClick = (inc) => {
    score+=inc;
  }
  console.log(score);
  const returnScore = () => {
    console.log(score)
    return(
        <><p>{score}</p></>
    )
  }
  return(
      <>
    <button onClick={handleClick(1)}>{returnScore()}</button>
      </>
  )



}

export default App;
