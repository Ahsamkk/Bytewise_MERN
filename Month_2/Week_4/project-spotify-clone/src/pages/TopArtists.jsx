import { ArtistCard, Error, Loader } from '../components';
import { useGetRecommendedTracksQuery, useGetMultipleArtistsQuery } from '../redux/services/spotifyApi';

const TopArtists = () => {
    const { data, isFetching, error } = useGetRecommendedTracksQuery();
    
    const getArtistIds = (tracks) => {
        let artistIds = "";
        for (let i=0; i<tracks?.length; i++) {
            artistIds += tracks[i].artists[0].id;
            if (i != tracks?.length-1) artistIds += ',';
        }
        return artistIds;
    };
    
    const { data: artistData, isFetching: isFetchingArtistData, error: error2 } = useGetMultipleArtistsQuery(getArtistIds(data?.tracks));
    
    if (isFetching || isFetchingArtistData) return <Loader title="Loading Top Artists" />;

    if (error || error2) return <Error />;

    return (
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists</h2>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {artistData?.artists.map((artist, i) => (
            <ArtistCard
                key={`${artist.id}-${i}`}
                artist={artist}
            />
            ))}
        </div>
        </div>
    );
};

export default TopArtists;