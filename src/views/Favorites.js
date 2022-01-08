import React, { useContext, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { DataContext } from '../context/Data'
import { collection, getDocs } from "firebase/firestore";
import { SingleMovie } from '../components/SingleMovie';

export const Favorites = () => {
    const { favoritesMovies, favoritesTvShows } = useContext(DataContext)
    // console.log(favoritesMovies)
    const favMovieList = [...favoritesMovies]
    // console.log(favoritesTvShows)
    const favTvList = [...favoritesTvShows]

    return (
        <div>
            <Navbar />
            <h6 className='text-white'>Favorite Movies</h6>
            <div>
                {
                    favMovieList.map(movie => (
                        <SingleMovie key={movie.id} m={movie.show} type="movie"/>
                    ))
                }
            </div>
            <h6 className='text-white'>Favorite TV Shows</h6>
            <div>
                {
                    favTvList.map(movie => (
                        <SingleMovie key={movie.id} m={movie.show} type="tv"/>
                    ))
                }
            </div>
        </div>
    )
}
