import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetTrackLyricsQuery, useGetTracksQuery, useGetRelatedTracksQuery } from "../redux/services/spotifyApi";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: songDetails, isFetching: isFetchingSongDetails } = useGetTracksQuery(songId);
    const { data: songLyrics, isFetching: isFetchingSongLyrics } = useGetTrackLyricsQuery(songId);
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedTracksQuery({ songId });

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

    if (isFetchingSongDetails || isFetchingRelatedSongs || isFetchingSongLyrics) return <Loader title="Searching song details" />
    if (error) return <Error />

    return (
        <div className="flex flex-col">
            <DetailsHeader songData={songDetails} />

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>
                <div className="mt-5">
                    {
                        songLyrics?.lyrics ? (
                            songLyrics?.lyrics.lines.map((line, i) => (
                                <p className="text-gray-400 text-base my-1" key={i}>{line.words}</p>
                            ))
                        ) : (
                            <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
                        )
                    }
                </div>
            </div>

            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>    
    )
}

export default SongDetails