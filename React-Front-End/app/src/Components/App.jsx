import {React, useEffect, useState } from 'react';
import '../styles.css';
import Carddeck from './Carddeck';
import Sandwich from './Sandwich';

function App() {
const [sandData, setSandData] = useState("")

const getReq = () => {
    fetch('http://localhost:7000/api')
    .then(res => {
        console.log(res)
        return res.json()})
      .then(data => {
        console.log(data)
        setSandData(data)
    })
  }

console.log(sandData)

useEffect(()=>{
  getReq()
},[])

  return (
    <div className="wrapper">
      <Carddeck
      img={sandData[0]?.img}
      name={sandData[0]?.sand_name}
      day="Sunday"
      />
      <Carddeck
      img={sandData[1]?.img}
      name={sandData[1]?.sand_name}
      day="Monday"
      />
      <Carddeck
      img={sandData[2]?.img}
      name={sandData[2]?.sand_name}
      day="Tuesday"
      />
      <Carddeck
      img={sandData[3]?.img}
      name={sandData[3]?.sand_name}
      day="Wednesday"
      />
      <Carddeck
      img={sandData[4]?.img}
      name={sandData[4]?.sand_name}
      day="Thursday"
      />
      <Carddeck
      img={sandData[5]?.img}
      name={sandData[5]?.sand_name}
      day="Friday"
      />
      <Carddeck
      img={sandData[6]?.img}
      name={sandData[6]?.sand_name}
      day="Saturday"
      />
      <Sandwich
      setSandData = {setSandData}
      sandData = {sandData}
      />
    </div>
    
  );
}

export default App;
