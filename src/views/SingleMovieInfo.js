import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { MovieInfo } from '../components/MovieInfo'
import {Navbar} from '../components/Navbar'
import { TvInfo } from '../components/TvInfo'
import { MovieComments } from '../components/MovieComments'
import {TvComments} from '../components/TvComments'
import { serverTimestamp } from '@firebase/firestore';

export const SingleMovieInfo = () => {
    const {user} = useUserAuth()

    // placeholder for comments
    const commentString = `Commenting as ${user.email}`

    // dynamic routing for specific movie or tv show
    const match = useMatch("/singlemovie/:type/:id")
    const [show, setShow] = useState([])
    const id = match.params.id
    const type = match.params.type
    // console.log(match.params.id)
    // console.log(match.params.type)


    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=a31ff14e759e872eb7151add966d60de`
    const img_url = "https://image.tmdb.org/t/p/original"

    // so it doesn't give error if poster path is undefined 
    let imgPath = img_url + show.poster_path
    if(imgPath !== "https://image.tmdb.org/t/p/originalundefined"){
        imgPath = img_url + show.poster_path
    }else{
        imgPath = ""
    }
    // let img_url_path = ""
    // if(imgPath === null){
    //     img_url_path = ""
    // }else{
    //     img_url_path = img_url + imgPath
    // }

    // get user comment and add it to addcomments
    const [comment, setComment] = useState("")
    const { addComments } = useContext(DataContext)

    // when comment is submitted
    async function handleComments(e){
        e.preventDefault()
        const data = {
            comment: comment,
            user : user.email,
            dateCreated: serverTimestamp()
        }
        try{
            // console.log(comment)
            await addComments(data, type, id)
        }catch(err){
            console.log(err)
        }
    }

    // get api call for that specific page user clicked
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
                        <img className='img-info float-left img-fluid'  src={imgPath} alt={show.original_title} />
                    </div>
                    { type === 'movie' ? <MovieInfo show={show}/>: <TvInfo show={show} />}
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
                            { type === 'movie' ? <MovieComments id={id}/>: <TvComments />}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
