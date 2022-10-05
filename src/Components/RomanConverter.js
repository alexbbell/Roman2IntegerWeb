import React, { Component, useEffect, useState } from 'react'

import { Button, Grid, TextField } from '@mui/material';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import ConfigData from '../Config/ConfigData.json';


const TheRomanConvert = (props) => {
    const [romanString, setRomanString] = useState('');
    const [arabianString, setArabianString] = useState('');
    const [errorMsg, setErrorMsg]=  useState();
    const mainUrl = ConfigData.externals.mainUrl;


    
    const RomanToArabian = async (string2convert) => {
        axios.post(mainUrl + '?income=' + string2convert)
        .then(function(response) {
            let data = response.data;
            setArabianString(data);
        })
        .catch(function(error) {
            setErrorMsg(error.response.data);

            setTimeout(() => {
                setErrorMsg(null);
              }, 3000);
        });
       
    }

    const foolDefender = (str) => {
        if(str != null && typeof str != 'undefined' ) {
            str = str.replace("IIII", "IV").replace("VV", "X").replace("XXXX", "XL").replace("LL", "C").replace("IVI", "V").
            replace("IIV", "IV").replace("IIX", "IX");
        }
        return str;
    }

    const changeRomanString = (event) => {
        setArabianString('');
        let str =   foolDefender(event.target.value.toUpperCase()); 
        setRomanString(str);
    }

    const sendRequest = () => {
        RomanToArabian(romanString);
    }
    const romanKeyPress = (e) => {
           sendRequest();
    }


    return (
        <>
            <Grid container spacing={2}>

            <Grid item xs={1} md={1} ></Grid>
                <Grid item xs={5}  md={3} >
                    <div className='roman'>

                        <div className='mdl'>
                            <TextField id="romanString" required onChange={changeRomanString} value={romanString}  
                                onKeyPress={(ev) => {
                                    if (ev.key === 'Enter') {
                                        ev.preventDefault();
                                        romanKeyPress();
                                    }
                                }} label="Enter a roman number" variant="outlined" inputProps={{style: {fontSize: 40}}} />

                        </div>
                    </div>
                </Grid>

                
                <Grid item xs={1} md={1} >
                    <div className='wrap'>
                <div className='mdl'>
                    <Button variant="contained" onClick={sendRequest} >Convert</Button></div></div>
                </Grid>
                
                <Grid item xs={5} md={3}  >
                    <div className='arabian'>
                        <div className='mdl'>

                            <TextField id="filled-basic"  label="Integer Result" variant="filled" 
                             value={arabianString} 
                           
                            inputProps={{style: {fontSize: 40}}}/>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={9} md={9}>
                    <div className='err'>{errorMsg}</div>
                </Grid>


            </Grid>
        </>
    )

}
export default TheRomanConvert;
