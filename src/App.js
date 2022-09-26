import React, { Component, useEffect, useState } from 'react'
import './App.css';
import { Button, Grid, TextField } from '@mui/material';
import TheRomanConvert from './Components/RomanConverter';


function App() {
  return (
    <div className="App">

      <Grid container spacing={2}>

        <Grid item xs={3} ms={3}></Grid>
        <Grid item xs={7} ms={7}>
          <h1>Roman to Integer Converter</h1>
          <span>
            There are six instances where we required subtraction:
            <ul>
              <li key="l1">I can be placed before V (5) and X to make 4 and 9.</li>
              <li key="l2">X can be placed before L (50) and C to make 40 and 90.</li>
              <li key="l3">C can be placed before D (500) and M to make 400 and 900.</li>
            </ul>
          </span>


        </Grid>
        <Grid item xs={2} ms={2}></Grid>
      </Grid>
      <header className="App-header">
        
        <TheRomanConvert />

        <Grid container spacing={2}>
          <Grid item xs={2} ms={2}></Grid>
          <Grid item xs={2} ms={2}>
            <ul>
              <li key="lnk1"><a href="https://github.com/alexbbell/Roman2Integer">https://github.com/alexbbell/Roman2Integer</a></li>
              <li key="lnk2"><a href="https://github.com/alexbbell/Roman2IntegerWeb">https://github.com/alexbbell/Roman2IntegerWeb</a></li>

            </ul>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
