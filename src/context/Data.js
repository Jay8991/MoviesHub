import { collection, getDocs, getFirestore, addDoc, getDoc, orderBy, query, doc, setDoc, updateDoc, deleteDoc } from "@firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { useUserAuth } from "./UserAuthContext";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const { user } = useUserAuth()
    const [favorites, setFavorites] = useState("")
    const [search, setSearch] = useState("")
    const [singleMovie, setSingleMovie] = useState([])

    const db = getFirestore();

    // const addFavorite = useCallback(
    //     async (favoritesData) => {
    //         // if user is logged in
    //         if(user.email){
    //             const favoriteRef = doc(db, 'users', user.email, 'favorites', favoritesData.id)
    //             const favoriteDoc = await getDoc(favoriteRef);

    //             if(!favoriteDoc.exists()){
    //                 // add to it 
    //                 await setDoc(favoriteRef)
    //             }
    //             else{
    //                 // already in favorites 
    //                 console.log("Already in favorites")
    //             }
    //         }
    //     },[db, user.email]
    // )

    const addFavorite = async ( favoritesData ) => {

        if(user.email){
            const favoriteRef = await addDoc(collection(db, 'users', user.email, 'favorites'), favoritesData)
            const doc = await getDoc( favoriteRef );
            setFavorites( [ { ...doc.data(), id: favoriteRef.id } ] );
        }
        
    }

    const getSearch = (search) => {
        setSearch(search)
    }

    // const getSingleMovie = (movie) => {
    //     console.log(movie)
    //     setSingleMovie(movie)
    // }


    // const getFavorites = useCallback(
    //     async() => {
    //         const querySnapshot = await getDocs(collection(db, 'users', user.email, 'favorites'));
    //         console.log(querySnapshot)
    //         return querySnapshot
    //     }, [db]
    // )
    
    // useEffect(() =>
    // {
    //     getFavorites();
    // }, [ getFavorites ])


    
    const values = {
        favorites, addFavorite, getSearch, search
    }

    return (
        <DataContext.Provider value={ values }>
            { props.children }
        </DataContext.Provider>
    )

}