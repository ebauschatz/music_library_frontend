import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <table className="table-style">
            <thead>
                <tr>
                    <th className="song-element">Title</th>
                    <th className="song-element">Artist</th>
                    <th className="song-element">Album</th>
                    <th className="song-element">Release Date</th>
                    <th className="song-element">Genre</th>
                    <th className="song-element">Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((song) => {
                    return (
                        <tr key={song.id} className="data-row">
                            <td className="song-element">{song.title}</td>
                            <td className="song-element">{song.artist}</td>
                            <td className="song-element">{song.album}</td>
                            <td className="song-element">{song.release_date}</td>
                            <td className="song-element">{song.genre}</td>
                            <td className="song-element">{song.likes}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
 
export default MusicTable;