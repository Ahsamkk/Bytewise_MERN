import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '44cc7a6fc2msh993222c80d86e6ep11dea2jsn54d2c33883db');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getRecommendedTracks: builder.query({query: (genre="pop") => `/recommendations/?limit=50&seed_genres=${genre}`}),
        getRelatedTracks: builder.query({query: ({ songId, artistId }) => `/recommendations/?limit=10&${songId ? `seed_tracks=${songId}` : `seed_artists=${artistId}`}`}),
        getTracks: builder.query({query: (songId) => `/tracks/?ids=${songId}`}),
        getTracksBySearch: builder.query({query: (searchTerm="") => `/search/?q=${searchTerm}&type=tracks&offset=0&limit=50&numberOfTopResults=5'`}),
        getTrackLyrics: builder.query({query: (songId) => `/track_lyrics/?id=${songId}`}),
        getArtists: builder.query({query: (artistId) => `/artists/?ids=${artistId}`}),
        getMultipleArtists: builder.query({query: (artistIds) => `/artists/?ids=${artistIds}`}),
    })
});

export const {
    useGetRecommendedTracksQuery,
    useGetRelatedTracksQuery,
    useGetTracksQuery,
    useGetTracksBySearchQuery,
    useGetTrackLyricsQuery,
    useGetArtistsQuery,
    useGetMultipleArtistsQuery,
} = spotifyApi;