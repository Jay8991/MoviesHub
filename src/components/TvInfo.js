import React, { useContext } from 'react'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'

export const TvInfo = (props) => {
    const {user} = useUserAuth()
    const { addFavorite } = useContext(DataContext)

    const show = props.show
    // console.log(show)
    
    async function handleFavorites(e){
        e.preventDefault()
        const formData = {
            userId : user.email, 
            show
        }
        try{
            await addFavorite(formData, "tv")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='col-6 show-info'>
            <h3 className='text-white show-title'>{show.name}</h3>
            <p className='text-white'>Overview: {show.overview}</p>
            <p className='text-white'>Release Date: {show.release_date}</p>
            <p className='text-white'>First Air Date: {show.first_air_date}</p>
            <p className='text-white'>Last Air Date: {show.last_air_date}</p>
            <p className='text-white'>Staus: {show.status}</p>
            <p className='text-white'>No. Of Episodes: {show.number_of_episodes}</p>
            <p className='text-white'>No. Of Seasons: {show.number_of_seasons}</p>
            <p className='text-white'>Vote Avg.: {show.vote_average}</p>
            <button onClick={handleFavorites} className='btn btn-light favorites-btn'>Add To Favorites</button>
         </div>
    )
}
