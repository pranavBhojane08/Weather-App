import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default  function SearchBox({updateInfo}){
    
    let [City, SetCity]=useState("");
    let [error ,setError]=useState("false");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6d4efceb12523291524921cbab5a8a2a";

    let getWheatherInfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`)
            let jasonResponse= await response.json();
           
     
            let result={
             city:City,
             temp:jasonResponse.main.temp,
             tempMin:jasonResponse.main.temp_min,
             tempMax:jasonResponse.main.temp_max,
             humidity:jasonResponse.main.humidity,
             feelsLike:jasonResponse.main.feels_like,
             weather:jasonResponse.weather[0].description,
     
     
         
         };
         console.log(result)
         return result;
        } catch(error){
            throw err;
        }
      
    }


let handelChange=(evt)=>{
    SetCity(evt.target.value);
    
}

let handelSubmit= async(evt)=>{
    try{
        evt.preventDefault();
        console.log(City);
        SetCity("");
    let newInfo= await getWheatherInfo();
    updateInfo(newInfo);
    }catch(error) {
        setError("true");
    }
    
};

    return(
        
        <div>
        <h3>Search for the weather</h3>
        <form  onSubmit={handelSubmit }>
        <TextField id="city" label="City Name" variant="outlined"  required value={City} onChange={handelChange}/>
        <br /><br /><br />   
        <Button variant="contained" type='submit'>SEARCH</Button>
        <br /><br />
        {/* {error && <p>No Such Place Exist</p>} */}
        </form>
        </div>
        
    );
} 