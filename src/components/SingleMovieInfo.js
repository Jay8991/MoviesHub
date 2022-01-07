import React from 'react'
import {Navbar} from './Navbar'

export const SingleMovieInfo = (props) => {

    console.log(props)
    return (
        <div className='text-white'>
            <Navbar />
            This is single movie Info
        </div>
    )
}
