import React, { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import '../server/config/window.js';
import { BarChart } from './ApexChart';
// const Chart = lazy(() => import('./ApexChart'))
// console.log(window, '1') 

export function App(props) {
  return (
    <>
      <div className="App">
        <div style={{width: '100%', height: '2000px', textAlign: 'center'}}>
              <BarChart/> 
              <svg width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            </svg>
        </div>
      </div>
    </>
  );
}

