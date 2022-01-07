import React from 'react'
import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 

export const MoviesList = () => {
    return (
        <div>
            <Navbar />
            <Movies type="movie" title="TRENDING MOVIES" url={apirequests.trending_movies} />
            <Movies type="movie" title="DISCOVER MOVIES" url={apirequests.discover_movie} />
            <Movies type="movie" title="ACTION MOVIES" url={apirequests.action_movies} />
            <Movies type="movie" title="ADVENTURE MOVIES" url={apirequests.adventure_movies} />
            <Movies type="movie" title="COMEDY MOVIES" url={apirequests.comedy_movies} />
            <Movies type="movie" title="ANIMATION MOVIES" url={apirequests.animation_movies} />
            <Movies type="movie" title="CRIME MOVIES" url={apirequests.crime_movies} />
            <Movies type="movie" title="FANTASY MOVIES" url={apirequests.fantasy_movies} />
            <Movies type="movie" title="ROMANCE MOVIES" url={apirequests.romance_movies} />
            <Movies type="movie" title="THRILLER MOVIES" url={apirequests.thriller_movies} />
            <Movies type="movie" title="HORROR MOVIES" url={apirequests.horror_movies} />
        </div>
    )
}
