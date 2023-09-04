
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [options,setOptions]=useState([])
  const [to,setTo]=useState('en');
  const [from,setFrom]=useState('en')
  const [input,setInput]=useState('')
  const [output,setOutput]=useState('');

 
  const handleTranslate=()=>{
      const params = new URLSearchParams();
      params.append('q',input);
      params.append('source',from);
      params.append('target',to);
      // params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
      axios.post('https://libretranslate.com/translate',params,
      {
        headers:{'accept':'application/json','Content-Type':'application/x-www-form-urlencoded'}
      }).then(res=> setOutput(res.data.transatedText)
     )
  }


  useEffect(()=>{
    axios.get('https://libretranslate.com/languages',{
      headers:{'accept':'application/json'}
    }).then(res=>setOptions(res.data))
    
  },[])

  return (
    <div className="App">
      <div className='selector'>
      From ({from}):
     <select onChange={e=>setFrom(e.target.value)}>
       {options.map((option)=>(
         <option key={option.code} value={option.code}>{option.name}</option>
       ))}
     </select>
     {" "}
     To ({to}):
     <select onChange={e=>setTo(e.target.value)}>
       {options.map((option,index)=>(
         <option key={option.code} value={option.code}>{option.name}</option>
       ))}
     </select>
     </div>
     <div className='textarea1'>
      <textarea cols='50' rows='8' onInput={e=>setInput(e.target.value)}></textarea>
     </div>
     <div className='textarea2'>
      <textarea cols='50' rows='8' value={output}></textarea>
     </div>
     <div>
      <button onClick={e=>handleTranslate()}>Translate</button>
     </div>
    </div>
  );
}

export default App;
