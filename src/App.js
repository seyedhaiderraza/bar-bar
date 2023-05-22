import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ProgressBar from './components/ProgressBar';
import { useEffect, useRef, useState } from 'react';

function App() {
  /*
  const [filled,setFilled] = useState(0)
  console.log('outside fillBarmethod and while',filled)
  const fillBar = ()=>{
    console.log('inside fillBar method',filled);
    let value=0
    while(value<100){
      setTimeout(()=>setFilled(filled=>filled+10),5000)
   value+=10
  }
}
*/
const [filled,setFilled] = useState(0)
const [isProgressStarted, setIsProgressStarted] = useState(false)
const fillBar = ()=>{
  setIsProgressStarted(true)
}
/*solution 2.
  if(isProgressStarted===true){
    if(filled<100)
    setTimeout(()=>{setFilled(filled=>filled+1)},1000)
  }
*/
//solution 3:
/*
let timeoutId= null;
useEffect(()=>{
  if(isProgressStarted===true && filled<100){
   
   
timeoutId = setTimeout(()=>{setFilled(filled=>filled+1)},1000)
  }
},[isProgressStarted,filled])
  const resetBar = ()=>{
    setFilled(0)
    setIsProgressStarted(false)
  clearTimeout(timeoutId)
  }
  */
//solution 4:
let timeoutId= null;
useEffect(()=>{
  if(isProgressStarted===true && filled<100){
   
   
timeoutId = setTimeout(()=>{setFilled(filled=>filled+1)},50)
  }
},[isProgressStarted,filled])
  const resetBar = ()=>{
    setFilled(0)
    setIsProgressStarted(false)
  clearTimeout(timeoutId)
  }

  return (
    <div className="App">
    <ProgressBar filled={filled}/>
    <div className='btn-section'>
       <Button fillBar={fillBar} type={'Run'}/>
       <Button fillBar={resetBar} type={'Reset'}/>
     </div>
    </div>
  );
}

export default App;
