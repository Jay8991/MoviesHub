import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { DataContext } from '../context/Data'
import {Navbar} from './Navbar'

export const SingleMovieInfo = (props) => {
    const match = useMatch("/singlemovie/:type/:id")
    const [show, setShow] = useState([])
    const id = match.params.id
    const type = match.params.type
    // console.log(match.params.id)
    // console.log(match.params.type)
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=a31ff14e759e872eb7151add966d60de`
    const img_url = "https://image.tmdb.org/t/p/original"
    // console.log(url)

    useEffect(() => {
        async function movie_data() {
            let response = await axios.get(url)
            // console.log(response.data)
            setShow(response.data)
            return response
        }
        movie_data()
    }, [url]);

    return (
        <div className='text-white'>
            <Navbar />
            <div>
                <img className='result-img'  src={img_url + show.poster_path} alt={show.original_title} />
            </div>
        </div>
    )
}
