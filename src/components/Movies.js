import React, { useContext, useEffect, useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import axios from 'axios'
import { DataContext } from '../context/Data'
import { SingleMovie } from './SingleMovie'


export const Movies = (props) => {
    // use state for movies list
    const [movies, setMovies] = useState([])
    // const search = props.search
    // console.log(search)

    // use axios to make api call 
    useEffect(() => {
        async function movie_data() {
            let response = await axios.get(props.url)
            // console.log(response)
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
                    <SingleMovie key={movie.id} m={movie} type={props.type}/>
                ))}
            </div>
        </div>
    )
}

