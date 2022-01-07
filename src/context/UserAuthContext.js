import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {auth} from "../firebase"

const userAuthContext = createContext()

export function UserAuthContextProvider( { children }){

    const [user, setUser] = useState("")

    // so the screen doesn't load and go to home page when user is logged in 
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        auth.returnsendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return updateEmail(user, email)
    }

    function updatePassword(password){
        return updatePassword(user, password)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        });
        return () => {
            unsubcribe();
        }
    }, [])

    let value = {
        user, signup, login, logout, googleSignIn, resetPassword, updatePassword, updateEmail
    }

    return (
        <userAuthContext.Provider value={value}>
            {!loading && children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}