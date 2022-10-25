import React, { useState } from 'react';
import './CreateSong.css'

const CreateSong = (props) => {
    const [songTitle, setSongTitle] = useState("");
    const [songAlbum, setSongAlbum] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songGenre, setSongGenre] = useState("");
    const [songReleaseDate, setSongReleaseDate] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        let newSong = {
            title: songTitle,
            album: songAlbum,
            artist: songArtist,
            genre: songGenre,
            release_date: songReleaseDate
        }
        props.createNewSong(newSong);

        setSongTitle("");
        setSongAlbum("");
        setSongArtist("");
        setSongGenre("");
        setSongReleaseDate("");
    }

    return (
        <form onSubmit={handleSubmit} className="form-spacing">
            <div className="form-row">
                <div>
                    <label className="form-label">Title</label>
                    <input type='text' value={songTitle} onChange={(event) => setSongTitle(event.target.value)}></input>
                </div>
                <div>
                    <label className="form-label">Album</label>
                    <input type='text' value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)}></input>
                </div>
                <div>
                    <label className="form-label">Artist</label>
                    <input type='text' value={songArtist} onChange={(event) => setSongArtist(event.target.value)}></input>
                </div>
            </div>
            
            <div className="form-row">
                <div>
                    <label className="form-label">Genre</label>
                    <input type='text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}></input>
                </div>
                <div>
                    <label className="form-label">Release Date</label>
                    <input type='date' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}></input>
                </div>
            </div>

            <div className="form-row">
                <button type='submit'>Create Song</button>
            </div>
        </form>
    );
}
 
export default CreateSong;