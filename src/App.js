import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import CreateSong from './Components/CreateSong/CreateSong';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  async function createNewSong(newSong) {
    let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong)
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  return (
    <div>
      <CreateSong createNewSong={createNewSong}/>
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;