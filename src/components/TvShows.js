import React from 'react'
import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 

export const TvShows = () => {
    return (
        <div>
            <Navbar />
            <Movies title="TRENDING TV SHOWS" url={apirequests.trending_tv} />
            <Movies title="DISCOVER TV SHOWS" url={apirequests.discover_tv} />
            <Movies title="ACTION/ADVENTURE TV SHOWS" url={apirequests.action_adventure_tv} />
            <Movies title="COMEDY TV SHOWS" url={apirequests.comedy_tv} />
            <Movies title="CRIME TV SHOWS" url={apirequests.crime_tv} />
            <Movies title="KIDS TV SHOWS" url={apirequests.kids_tv} />
            <Movies title="MYSTERY TV SHOWS" url={apirequests.mystery_tv} />
            <Movies title="DRAMA TV SHOWS" url={apirequests.drame_tv} />
        </div>
    )
}
