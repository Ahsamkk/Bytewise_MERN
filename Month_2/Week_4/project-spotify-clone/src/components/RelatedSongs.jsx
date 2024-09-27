import SongBar from "./SongBar";

const RelatedSongs = ({ data, artistData, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs: </h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.tracks.map((song, i) => (
        <SongBar
          key={`${song?.id}`}
          song={song}
          i={i}
          artistData={artistData}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
