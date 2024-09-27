import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTracksBySearchQuery } from '../redux/services/spotifyApi';

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetTracksBySearchQuery(searchTerm);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const songs = data?.tracks.items;

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className='font-black'>{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            type="search"
            key={song.id}
            song={song?.data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;