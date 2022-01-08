import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { MovieInfo } from '../components/MovieInfo'
import {Navbar} from '../components/Navbar'
import { TvInfo } from '../components/TvInfo'
import { MovieComments } from '../components/MovieComments'
import {TvComments} from '../components/TvComments'

export const SingleMovieInfo = () => {
    const {user} = useUserAuth()
    const commentString = `Commenting as ${user.email}`
    // console.log(commentString)

    const match = useMatch("/singlemovie/:type/:id")
    const [show, setShow] = useState([])
    const id = match.params.id
    const type = match.params.type
    // console.log(match.params.id)
    // console.log(match.params.type)


    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=a31ff14e759e872eb7151add966d60de`
    const img_url = "https://image.tmdb.org/t/p/original"
    // console.log(url)

    const [comment, setComment] = useState("")
    const { addComments } = useContext(DataContext)


    async function handleComments(e){
        e.preventDefault()
        const data = {
            comment: comment,
            user : user.email
        }
        try{
            // console.log(comment)
            await addComments(data, type, id)
            setComment("")
        }catch{
            console.log("ERROR")
        }
    }

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
                    { type == 'movie' ? <MovieInfo show={show}/>: <TvInfo show={show} />}
                </div>
                <div className='row mt-5 comments-container'>
                    <div className='col'>
                        <h3 className='text-white'>Comments</h3>
                        <hr className='hr-line'/>
                        <form onSubmit={handleComments}>
                            <input className='text-white input-comment p-2' type='text' placeholder={commentString} onChange={(e) => setComment(e.target.value)} />
                        </form>
                        <hr className='hr2-line'/>
                        <div className='mt-3 text-white mb-5'>
                            { type == 'movie' ? <MovieComments/>: <TvComments />}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
