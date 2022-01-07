import React, { useContext, useState } from 'react'
import { Link, Router, useMatch, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { SingleMovieInfo } from './SingleMovieInfo'


export const SingleMovie = (props) => {
    const img_url = "https://image.tmdb.org/t/p/original"
    const movie = props.m
    const id = movie.id
    let type = ""
    if (props.type == null){
        type = movie.media_type
    }else{
        type = props.type
    }
    // const { getSingleMovie } = useContext(DataContext)
    // getSingleMovie(movie)
    // const [singlePage, setSinglePage] = useState(false)
    // console.log(img_url + movie.poster_path)
    const path = `/singlemovie/${type}/${id}`
    // console.log(movie)

    const { addFavorite } = useContext(DataContext)
    const {user} = useUserAuth()
    // const navigate = useNavigate()

    const handleSinglePage = () => {
        // setSinglePage(true)
        // navigate("/singlepage")
        // console.log(user.email)
        const formData = {
            userId : user.email, 
            movie
        }
        addFavorite(formData)
    }

    return (
            <Link to={path}>
                <img className='result-img'  src={img_url + movie.poster_path} alt={movie.original_title}  />
            </Link>
    )
}
