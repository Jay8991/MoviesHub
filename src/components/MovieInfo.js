import React from 'react'

export const MovieInfo = (props) => {

    const show = props.show
    
    const handleFavorites = () => {

    }

    return (
        <div className='col-6 show-info'>
            <h3 className='text-white show-title'>{show.title}</h3>
            <p className='text-white'>Overview: {show.overview}</p>
            <p className='text-white'>Release Date: {show.release_date}</p>
            <p className='text-white'>Run Time: {show.runtime} min.</p>
            {/* <p className='text-white'>Staus: {show.status}</p> */}
            <p className='text-white'>Vote Avg.: {show.vote_average}</p>
            {/* <p className='text-white'>Genre.: {show.genres.map(g => (console.log(g.name)))}</p> */}
            <button onClick={handleFavorites} className='btn btn-light favorites-btn'>Add To Favorites</button>
         </div>
    )
}
