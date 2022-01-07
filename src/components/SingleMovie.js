import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { SingleMovieInfo } from './SingleMovieInfo'


export const SingleMovie = (props) => {
    const img_url = "https://image.tmdb.org/t/p/original"
    const movie = props.m
    const [singlePage, setSinglePage] = useState(false)
    // console.log(img_url + movie.poster_path)

    const { addFavorite } = useContext(DataContext)
    const {user} = useUserAuth()
    const navigate = useNavigate()

    const handleSinglePage = () => {
        setSinglePage(true)
        navigate("/singlepage")
        // console.log(user.email)
        const formData = {
            userId : user.email, 
            movie
        }
        addFavorite(formData)
    }

    return (
        // <div>
            <img className='movie-img result-img'  src={img_url + movie.poster_path} alt={movie.original_title}  onClick={handleSinglePage} />
        // {/* </div> */}
    )
}
