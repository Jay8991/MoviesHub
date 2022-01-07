import React, { useContext, useEffect, useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import axios from 'axios'
import { DataContext } from '../context/Data'
import { SingleMovie } from './SingleMovie'
import { Navbar } from './Navbar'
import { Movies } from './Movies'

export const Results = (props) => {
    const { search } = useContext(DataContext)
    // console.log(search)
    const url = `https://api.themoviedb.org/3/search/multi?api_key=a31ff14e759e872eb7151add966d60de&language=en-US&query=${search}&page=1&include_adult=false`
    const img_url = "https://image.tmdb.org/t/p/original"
     // use state for movies list
    const [movies, setMovies] = useState([])
 
    //  use axios to make api call 
     useEffect(() => {
         async function movie_data() {
             let response = await axios.get(url)
             console.log(response.data.results)
             setMovies(response.data.results)
             return response
         }
         movie_data()
     }, [url]);
 
     return (
         <div>
            <Navbar />
            <h6 className='text-white'>Results</h6> 
            <div>
                {movies.map(movie => (
                    <SingleMovie key={movie.id} m={movie} />
                ))}
            </div>
        </div>
     )
}
