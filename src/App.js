import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
    const [country,setCountry]=useState();
    const [countrylist]= useState(['India','France','Srilanka']);
    const [state,setState]=useState();
    const [statelist,setstatelist]= useState([]);
    const [city,setCity]=useState();
    const [citylist,setcitylist]= useState([]);
    useEffect(()=>{
        console.log(country);
        switch(country){
            case 'India':
                
            setstatelist(['Karnataka','Kerala','Tamilnadu']);
            break;
        case 'France':
            setstatelist(['Burgundy Franche-Comté','Normandy','Brittany']);
            break;
        case 'Srilanka':
            setstatelist(['Badulla','Galle','Ratnapura']);
            break;
        default:
            setstatelist([]);
        }
        
    },[country]);
    useEffect(()=>{
        console.log(state);
        switch(state){
            case 'Karnataka':
                setcitylist('Banglore');
                break;
            case 'Kerala':
                setcitylist('Trivandrum');
                break;
            case 'Tamilnadu':
                setcitylist('Tiruppur');
                break;
            case 'Badulla':
                setcitylist('Ella');
                break;
    
            case 'Galle':
                setcitylist('Denivaya');
                break;
            case 'Ratnapura':
                setcitylist('Balangoda');
                break;
            case 'Burgundy Franche-Comté':
                setcitylist('Auxerre');
                break;
            case 'Normandy':
                setcitylist('Saint-Lo');
                break;
            case 'Brittany':
                setcitylist('Saint-Brieuc');
                break;            
            default:
                setcitylist([]);
            }
    },[state]);
  return (<>    <h1>CITY SELECTOR</h1>
    <div className="App">
        
      <label>Enter your country:</label>
      <select value={country} onChange={(event)=>{setCountry(event.target.value)}}>
      <option  >Please choose one option</option>
                {countrylist.map((i,index) => {
                    
                    return (<option key={index} value={i}>{i}</option>);
                })}
        
      </select><br></br>
      <label>Enter your State:</label>
      <select onChange={(event)=>{setState(event.target.value)}} >
        <option  >Please choose one option</option>
                {statelist.map((i,index) => {
                    return (<option key={index} value={i}>{i}</option>);
                })}
      </select><br></br>
      <label>Enter your city:</label><br></br>
      <select value={city} onChange={(event)=>{setCity(event.target.value)}}>
      <option >Please choose one option</option>
      <option >{citylist}</option>
       </select>
    </div>
    </>

  );
}

export default App;
