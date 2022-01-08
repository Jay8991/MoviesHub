import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import {Navbar} from './Navbar'

export const SingleMovieInfo = (props) => {
    const {user} = useUserAuth()
    const commentString = `Commenting as ${user.email}`
    console.log(commentString)
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
        <div >
            <Navbar />
            <div className='container img-container'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='img-info float-left img-fluid'  src={img_url + show.poster_path} alt={show.original_title} />
                    </div>
                    <div className='col-6 show-info'>
                        <h3 className='text-white show-title'>{show.title}</h3>
                        <p className='text-white'>Overview: {show.overview}</p>
                        <p className='text-white'>Release Date: {show.release_date}</p>
                        <p className='text-white'>Run Time: {show.runtime} min.</p>
                        <p className='text-white'>Staus: {show.status}</p>
                        <p className='text-white'>Vote Avg.: {show.vote_average}</p>
                        {/* <p className='text-white'>Genre.: {show.genres.map(g => (console.log(g.name)))}</p> */}
                    </div>
                </div>
                <div className='row mt-5 comments-container'>
                    <div className='col'>
                        <h3 className='text-white'>Comments</h3>
                        <hr className='hr-line'/>
                        <textarea className='text-white' type='text' placeholder={commentString}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}
