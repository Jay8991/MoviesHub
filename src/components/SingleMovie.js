import React, { useContext, useState } from 'react'
import { Link, Router, useMatch, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { SingleMovieInfo } from '../views/SingleMovieInfo'


export const SingleMovie = (props) => {
    const img_url = "https://image.tmdb.org/t/p/original"
    const movie = props.m

    const { getMovieId } = useContext(DataContext)

    const imgPath = movie.poster_path
    let img_url_path = ""
    if(imgPath === null){
        img_url_path = ""
    }else{
        img_url_path = img_url + imgPath
    }

    const id = movie.id
    let type = ""
    if (props.type == null){
        type = movie.media_type
    }else{
        type = props.type
    }

    const handleSingleMovie = () =>{
        getMovieId(id)
    }

    // console.log(img_url + movie.poster_path)
    const path = `/singlemovie/${type}/${id}`

    return (
            <Link to={path} onClick={handleSingleMovie}>
                <img className='result-img m-auto'  src={img_url_path} alt={movie.original_title}  />
            </Link>
    )
}
