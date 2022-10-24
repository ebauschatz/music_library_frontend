import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' value={songTitle} onChange={(event) => setSongTitle(event.target.value)}></input>
            </div>
            <div>
                <label>Album</label>
                <input type='text' value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)}></input>
            </div>
            <div>
                <label>Artist</label>
                <input type='text' value={songArtist} onChange={(event) => setSongArtist(event.target.value)}></input>
            </div>
            <div>
                <label>Genre</label>
                <input type='text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}></input>
            </div>
            <div>
                <label>Release Date</label>
                <input type='date' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}></input>
            </div>
            <button type='submit'>Create Song</button>
        </form>
    );
}
 
export default CreateSong;