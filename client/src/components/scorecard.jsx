import React, { useState, useEffect } from 'react';

export default function Scoreboard({ score }) {


  return (
    <div style={{position:"fixed",marginTop : "12px",marginLeft : "20px"}} className="card">
      <div className="btn">
        <strong className="m-1" >{score}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}