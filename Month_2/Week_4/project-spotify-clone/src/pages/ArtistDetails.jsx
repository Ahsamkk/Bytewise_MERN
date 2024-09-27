import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistsQuery, useGetRelatedTracksQuery } from "../redux/services/spotifyApi";

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: relatedSongs, isFetching: isFetchingRelatedSongs, error1 } = useGetRelatedTracksQuery({ artistId });
    const { data: artistData, isFetching: isFetchingArtistData, error2 } = useGetArtistsQuery(artistId);


    if (isFetchingArtistData || isFetchingRelatedSongs) return <Loader title="Searching artist details" />
    if (error1 || error2) return <Error />

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />

            <RelatedSongs
                data={relatedSongs}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>    
    )
}

export default ArtistDetails