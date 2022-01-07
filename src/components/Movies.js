import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import axios from 'axios'

export const Movies = (props) => {
    // use state for movies list
    const [movies, setMovies] = useState([])
    // will need this url because in the api on the path is given not the full url 
    const img_url = "https://image.tmdb.org/t/p/original/"

    // use axios to make api call 
    useEffect(() => {
        async function movie_data() {
            let response = await axios.get(props.url)
            console.log(response.data.results)
            setMovies(response.data.results)
            return response
        }
        movie_data()
    }, [props.url]);

    return (
        <div className='m-3'>
            <h6 className='text-white'> {props.title}</h6>
            <div className='movie-container d-flex'>
                {movies.map(movie => (
                    <img className='movie-img' src={img_url + movie.poster_path} alt={movie.original_title} />
                ))}
            </div>
        </div>
    )
}

