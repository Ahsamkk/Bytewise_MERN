import { Link } from "react-router-dom";
import millify from "millify";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const song = songData?.tracks[0];
  const artist = artistData?.artists[0];

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={artistId ? artist?.images[0].url : song?.album.images[0].url}
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : song?.name}</p>
          {!artistId && (
            <Link to={`/artists/${song?.artists[0].id}`}>
                <p className="text-base text-gray-400 mt-2">{song?.artists[0].name}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">Genre: {artistId ? (artist?.genres[0].charAt(0).toUpperCase() + artist?.genres[0].slice(1)) : song?.duration}</p>
          {artistId && (
            <>
            <p className="text-base text-gray-400 mt-2">Followers: {millify(artistData?.artists[0].followers?.total)}</p>
            <p className="text-base text-gray-400 mt-2">Popularity: {artistData?.artists[0].popularity}</p>
            </>
            )}
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  )
}

export default DetailsHeader