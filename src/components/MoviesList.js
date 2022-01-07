import React from 'react'
import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 

export const MoviesList = () => {
    return (
        <div>
            <Navbar />
            <Movies title="TRENDING MOVIES" url={apirequests.trending_movies} />
            <Movies title="DISCOVER MOVIES" url={apirequests.discover_movie} />
            <Movies title="ACTION MOVIES" url={apirequests.action_movies} />
            <Movies title="ADVENTURE MOVIES" url={apirequests.adventure_movies} />
            <Movies title="COMEDY MOVIES" url={apirequests.comedy_movies} />
            <Movies title="ANIMATION MOVIES" url={apirequests.animation_movies} />
            <Movies title="CRIME MOVIES" url={apirequests.crime_movies} />
            <Movies title="FANTASY MOVIES" url={apirequests.fantasy_movies} />
            <Movies title="ROMANCE MOVIES" url={apirequests.romance_movies} />
            <Movies title="THRILLER MOVIES" url={apirequests.thriller_movies} />
            <Movies title="HORROR MOVIES" url={apirequests.horror_movies} />
        </div>
    )
}
