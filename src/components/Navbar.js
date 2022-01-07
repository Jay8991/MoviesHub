import React from 'react'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

export const Navbar = () => {
    const {user, logout} = useUserAuth()
    const handleLogout = async() => {
        try{
            await logout()
        }catch(err){
            console.log(err.message)
        }
    }
    return (
        <nav className="navbar navbar-expand-sm sticky-top nav-color">
            <Link className="navbar-brand link-hover" to="/home">MoviesHub</Link>
            <button className="navbar-toggler d-lg-none" type="button" >
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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link onClick={ handleLogout } to="/" className="nav-link link-hover">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
