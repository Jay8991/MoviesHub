import { confirmPasswordReset } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Data'
import { useUserAuth } from '../context/UserAuthContext'
import { Movies } from './Movies'
import { Results } from './Results'

export const Navbar = () => {

    const {user, logout} = useUserAuth()
    const { getSearch } = useContext(DataContext)
    
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleLogout = async() => {
        try{
            await logout()
        }catch(err){
            console.log(err.message)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        getSearch(search)
        navigate("/results")
    }


    return (

        <nav className="navbar navbar-expand-sm sticky-top nav-color" >
            <Link className="navbar-brand link-hover" to="/home">MoviesHub</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active ">
                        <Link className="nav-link link-hover" to="/home">Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link link-hover" to="/tvshows">TV Shows </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link link-hover" to="/movieslist">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-hover" to="/favorites">Favorites</Link>
                    </li>
                </ul>
                <form onSubmit={handleSearch}>
                    <input className=" p-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                    <button className="btn btn-outline-light my-2 my-sm-0 mr-5" type="submit" >Search</button>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link onClick={ handleLogout } to="/" className="nav-link link-hover">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
