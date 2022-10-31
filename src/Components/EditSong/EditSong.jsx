import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './EditSong.css'

const EditSong = (props) => {
    const [songTitle, setSongTitle] = useState("");
    const [songAlbum, setSongAlbum] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songGenre, setSongGenre] = useState("");
    const [songReleaseDate, setSongReleaseDate] = useState("");

    useEffect(() => {
        setSongTitle(props.song.title);
        setSongAlbum(props.song.album);
        setSongArtist(props.song.artist);
        setSongGenre(props.song.genre);
        setSongReleaseDate(props.song.release_date);
      }, [props.song])

    function handleSaveChanges() {
        let updatedSong = {
            title: songTitle,
            album: songAlbum,
            artist: songArtist,
            genre: songGenre,
            release_date: songReleaseDate
        };
        props.editSong(props.song.id, updatedSong);
        props.handleClose();
    }

    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Edit Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="edit-body">
                    <label className="form-label">Title</label>
                    <input type='text' value={songTitle} onChange={(event) => setSongTitle(event.target.value)} data-cy="edit-song-title"></input>
                </div>
                <div className="edit-body">
                    <label className="form-label">Album</label>
                    <input type='text' value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)}></input>
                </div>
                <div className="edit-body">
                    <label className="form-label">Artist</label>
                    <input type='text' value={songArtist} onChange={(event) => setSongArtist(event.target.value)}></input>
                </div>
                <div className="edit-body">
                    <label className="form-label">Genre</label>
                    <input type='text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}></input>
                </div>
                <div className="edit-body">
                    <label className="form-label">Release Date</label>
                    <input type='date' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}></input>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSaveChanges} data-cy="save-edit-changes">Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default EditSong;