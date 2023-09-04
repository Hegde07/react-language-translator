
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [to,setTo]=useState('');
  const [from,setFrom]=useState('')
  const [input,setInput]=useState('')
  const [output,setOutput]=useState('');


  useEffect(()=>{
    axios.get('https://libretranslate.com/languages',{
      headers:{'accept':'application/json'}
    }).then(res=>console.log(res))
  },[])

  return (
    <div className="App">
      <div className='selector'>
      From:
     <select>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
     </select>
     To:
     <select>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
     </select>
     </div>
     <div className='textarea1'>
      <textarea cols='50' rows='8'></textarea>
     </div>
     <div className='textarea2'>
      <textarea cols='50' rows='8'></textarea>
     </div>
     <div>
      <button>Translate</button>
     </div>
    </div>
  );
}

export default App;
