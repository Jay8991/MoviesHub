import React from 'react'
import { Movies } from '../components/Movies'
import {Navbar} from "../components/Navbar"
import apirequests from '../apirequests' 

export const TvShows = () => {
    return (
        <div>
            <Navbar />
            <Movies type="tv" title="TRENDING TV SHOWS" url={apirequests.trending_tv} />
            <Movies type="tv" title="DISCOVER TV SHOWS" url={apirequests.discover_tv} />
            <Movies type="tv" title="ACTION/ADVENTURE TV SHOWS" url={apirequests.action_adventure_tv} />
            <Movies type="tv" title="COMEDY TV SHOWS" url={apirequests.comedy_tv} />
            <Movies type="tv" title="CRIME TV SHOWS" url={apirequests.crime_tv} />
            <Movies type="tv" title="KIDS TV SHOWS" url={apirequests.kids_tv} />
            <Movies type="tv" title="MYSTERY TV SHOWS" url={apirequests.mystery_tv} />
            <Movies type="tv" title="DRAMA TV SHOWS" url={apirequests.drame_tv} />
        </div>
    )
}
