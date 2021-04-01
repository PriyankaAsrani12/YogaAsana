import React, { Component } from 'react';
import './CoverPage.css';
import './Practise.css';
import { useState } from "react"
import meditate from './assets/yoga.svg'
// import Welcome from './Welcome';
import PoseNet from "react-posenet"


function Practise() {
    const [posesString, setPosesString] = useState([])
  return (
    <div className="container">
        <h1 className = "top">Let our model detect your yoga poses 😃 </h1>
        <br/>
        <div className = "posenet">
        <PoseNet
    inferenceConfig={{ decodingMethod: "single-person" }}
    onEstimate={poses => {
      setPosesString(JSON.stringify(poses))
    }}
  />
  <br/>
  <br/>
  {/* <h5 className = "color">Identified Keypoints</h5>
  <br/>
  <p>{posesString}</p> */}
    </div>
    </div>
  );
}


export default Practise;