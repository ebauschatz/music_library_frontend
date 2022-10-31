import React, { useState } from 'react';
import './MusicTable.css'
import EditSong from '../EditSong/EditSong';

const MusicTable = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingSong, setEditingSong] = useState({});

    function handleShowEdit(song) {
        setEditingSong(song);
        setShowEditModal(true);
    }

    function handleCloseEdit(song) {
        setShowEditModal(false);
        setEditingSong({});
    }

    function handleDeleteClick(id) {
        props.deleteSong(id);
    }

    function handleLikeClick(id) {
        props.likeSong(id);
    }

    return (
        <>
            <table className="table-style">
                <thead>
                    <tr>
                        <th className="song-element">Title</th>
                        <th className="song-element">Artist</th>
                        <th className="song-element">Album</th>
                        <th className="song-element">Release Date</th>
                        <th className="song-element">Genre</th>
                        <th className="song-element">Likes</th>
                        <th className="song-element"></th>
                        <th className="song-element"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song) => {
                        return (
                            <tr key={song.id} className="data-row">
                                <td className="song-element" data-cy="table-song-title">{song.title}</td>
                                <td className="song-element">{song.artist}</td>
                                <td className="song-element">{song.album}</td>
                                <td className="song-element">{song.release_date}</td>
                                <td className="song-element">{song.genre}</td>
                                <td className="song-element">
                                    {song.likes}
                                    <i className="fa fa-arrow-up like-increment" onClick={() => handleLikeClick(song.id)}></i>
                                </td>
                                <td className="song-element"><i className="fa fa-edit edit-icon" onClick={() => handleShowEdit(song)}></i></td>
                                <td className="song-element"><i className="fa fa-trash-o delete-icon" onClick={() => handleDeleteClick(song.id)}></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <EditSong show={showEditModal} handleClose={handleCloseEdit} song={editingSong} title={editingSong.title} editSong={props.editSong}/>
        </>
    );
}
 
export default MusicTable;