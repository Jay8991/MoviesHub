import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 
import React from 'react'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Movies title="TRENDING MOVIES" url={apirequests.trending_movies} />
            <Movies title="TRENDING TV SHOWS" url={apirequests.trending_tv} />
            <Movies title="TOP RATED MOVIES" url={apirequests.top_rated_movies} />
            <Movies title="POPULAR TV SHOWS" url={apirequests.popular_tv} />
            <Movies title="POPULAR MOVIES" url={apirequests.popular_movies} />
            <Movies title="UPCOMING MOVIES" url={apirequests.upcoming_movies} />
            <Movies title="TOP RATED TV SHOWS" url={apirequests.top_rated_tv} />
        </div>

    )
}
