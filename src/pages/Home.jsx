import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieList from '../components/MovieList'
import { apikey, BASEURL } from '../constant';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || "avatar";
    try {
        const moviesApiEndpoint = `${BASEURL}&s=${searchTerm}`;
        const response = await axios.get(moviesApiEndpoint);
        return { moviesData: response.data, searchTerm, error: "", isError: false };
    } catch (error) {
        const errorMessage = error?.response?.data?.error || error?.message || "something went wrong";
        return { moviesData: null, searchTerm, error: errorMessage, isError: true };
    }
}
const Home = () => {
    const movieData = useLoaderData();
    return (
        <>
            <SearchForm searchTerm={movieData.searchTerm} />
            <MovieList movieApiResponse={movieData}/>
        </>
    )
}

export default Home