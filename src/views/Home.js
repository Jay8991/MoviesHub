import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 
import React from 'react'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Movies type="movie" title="TRENDING MOVIES" url={apirequests.trending_movies} />
            <Movies type="tv" title="TRENDING TV SHOWS" url={apirequests.trending_tv} />
            <Movies type="movie" title="TOP RATED MOVIES" url={apirequests.top_rated_movies} />
            <Movies type="tv" title="POPULAR TV SHOWS" url={apirequests.popular_tv} />
            <Movies type="movie" title="POPULAR MOVIES" url={apirequests.popular_movies} />
            <Movies type="movie" title="UPCOMING MOVIES" url={apirequests.upcoming_movies} />
            <Movies type="tv" title="TOP RATED TV SHOWS" url={apirequests.top_rated_tv} />
        </div>

    )
}
