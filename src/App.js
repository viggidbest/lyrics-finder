
import './App.css';
import { useState } from 'react';
import axios, * as others from 'axios'

function App() {
  process.env.CI = false
  const[artist ,setArtist] =  useState("")
  const[song,setSong] = useState("")
  const[lyrics,setLyrics] = useState("")
  console.log(process.env.REACT_APP_API_KEY)
  function searchLyrics() {
    if(artist === ""|| song === ""){
      return;
    }
    axios.get(
      `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=${process.env.REACT_APP_API_KEY}`).then(res => {
            console.log(res.data)               
                 
              })
  }
  
  return (
    <div className="App">
        <h1>Lyrics Finder</h1>
        <input className='inp' placeholder='Artist name' onChange={(e)=>{setArtist(e.target.value)}}></input>

        <input className='inp' placeholder='Song name' onChange={(e)=>{setSong(e.target.value)}}></input>

        <button type='submit' onClick={()=>{searchLyrics()}}>Search</button>
        <hr />

        <pre>{lyrics}</pre>

    </div>
  );
}

export default App;
