import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import '../server/config/window.js';
import { NacharbeitFetcher } from '../controller/fetcher/prototyp';

// console.log(window, '1') 

export function App() {

  return (
    <>
      <div className="App">
        <div style={{width: '100%', height: '100px', textAlign: 'center', background: 'tomato'}}>
            <img src="https://quickchart.io/apex-charts/render?config={%20chart:%20{%20type:%20%27line%27%20},%20series:%20[{%20name:%20%27sales%27,%20data:%20[31,40,35,50,49,60,70,91,125]%20}],%20xaxis:%20{%20categories:%20[1991,1992,1993,1994,1995,1996,1997,%201998,1999]%20}%20}"></img>
        </div>
      </div>
    </>
  );
}

