import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();
const allMoviesUrl = 'https://www.omdbapi.com/?apikey=e4d8531a&s=man';
const searchMovies = 'https://www.omdbapi.com/?apikey=e4d8531a&s=';

const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem('favorites');
    if(favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
    } else {
        favorites = []
    }
    return favorites
};


const AppProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())



    const fetchMovies = async(url) => {
        setLoading(true);
        try{
            const {data} = await axios.get(url)
            if(data.Search){
                setMovies(data.Search)
            } else {
                setMovies([])
            }
        } catch (e) {
            console.log(e.response)
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(allMoviesUrl)
    },[])

    useEffect(() => {
        if(searchTerm){ 
           fetchMovies(`${searchMovies}${searchTerm}`)
        }
    },[searchTerm])

    const selectMovie = (imdbID, favoriteMovie) => {
        let movie;
        if(favoriteMovie){
            movie = favorites.find((movie) => movie.imdbID === imdbID)
        } else {
            movie = movies.find((movie) => movie.imdbID === imdbID)
        }
        setSelectedMovie(movie)
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const addToFavorites = (imdbID) => {
        const movie = movies.find((movie) => movie.imdbID === imdbID);
        const alreadyFavorite = favorites.find((movie) => movie.imdbID === imdbID);
        if(alreadyFavorite) return
        const updateFavorites = [...favorites, movie];
        setFavorites(updateFavorites)
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    };

    const removeFromFavorites = (imdbID) => {
        const updateFavorites = favorites.filter((movie) => movie.imdbID !== imdbID)
        setFavorites(updateFavorites);
        localStorage.setItem('favorites', JSON.stringify(updateFavorites))
    };


    return (
        <AppContext.Provider value={{movies, loading, setSearchTerm, showModal, setShowModal, selectMovie, selectedMovie, closeModal, favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
export const useGlobalContext = () => {
    return useContext(AppContext);
}