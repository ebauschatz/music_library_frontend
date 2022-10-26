import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';

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

  function filterSongs(searchTerm) {
    let filteredSongs = songs.filter((song) => {
      return (
        song.title.includes(searchTerm)
        || song.artist.includes(searchTerm)
        || song.album.includes(searchTerm)
        || song.genre.includes(searchTerm)
        || song.release_date.includes(searchTerm)
      )
    });
    setSongs(filteredSongs);
  }

  async function deleteSong(songId) {
    let response = await axios.delete("http://127.0.0.1:8000/api/music/" + songId + "/");
    if (response.status === 204) {
      await getAllSongs();
    }
  }

  async function likeSong(songId) {
    let response = await axios.patch("http://127.0.0.1:8000/api/music/" + songId + "/like/");
    if (response.status === 200) {
      await getAllSongs();
    }
  }

  async function editSong(songId, updatedSong) {
    let response = await axios.put("http://127.0.0.1:8000/api/music/" + songId + "/", updatedSong);
    if (response.status === 200) {
      await getAllSongs();
    }
  }

  return (
    <div>
      <CreateSong createNewSong={createNewSong}/>
      <SearchBar filterSongs={filterSongs} getAllSongs={getAllSongs}/>
      <MusicTable songs={songs} deleteSong={deleteSong} likeSong={likeSong} editSong={editSong}/>
    </div>
  );
}

export default App;