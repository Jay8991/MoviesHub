import { collection, getDocs, getFirestore, addDoc, getDoc, orderBy, query, doc, setDoc, updateDoc, deleteDoc, collectionGroup } from "@firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { useUserAuth } from "./UserAuthContext";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const { user } = useUserAuth()

    const [favoritesMovies, setFavoritesMovies] = useState("")
    const [favoritesTvShows, setFavoritesTvShows] = useState("")
    const [loadingTv, setLoadingTv] = useState(false)
    const [loadingMovies, setLoadingMovies] = useState(false)

    const [search, setSearch] = useState("")

    const [movieComments, setMovieComments ] = useState("");
    const [tvComments, setTvComments ] = useState("");
    const [loadingMovieComments, setLoadingMovieComments] = useState(false)
    const [loadingTvComments, setLoadingTvComments] = useState(false)
    const [movieId, setMovieId] = useState()

    const db = getFirestore();

    const addFavorite = async ( favoritesData, type ) => {
        if(type === "movie"){
            const favoriteRef = await addDoc(collection(db, 'favorites', user.email, "movie"), favoritesData)
            const doc = await getDoc( favoriteRef );
            setFavoritesMovies( [ { ...doc.data(), id: favoriteRef.id } ] ); 
            setLoadingMovies(true)
        }else{
            const favoriteRef = await addDoc(collection(db, 'favorites', user.email, "tv"), favoritesData)
            const doc = await getDoc( favoriteRef );
            setFavoritesTvShows( [ { ...doc.data(), id: favoriteRef.id } ] ); 
            setLoadingTv(true)
        }
    }

    const getSearch = (search) => {
        setSearch(search)
    }

    const getFavoritesMovies = async() => {

        if(user === null){
            return
        }
        const q = query(collection(db, "favorites", user.email, "movie"));
        const querySnapshot = await getDocs(q);
        let favorites = [] 
        querySnapshot.forEach(doc => {
            favorites.push({
                id: doc.id,
                ...doc.data()
            })
        });
        setFavoritesMovies(favorites)
        setLoadingMovies(false)
        return querySnapshot;
    }
    useEffect(() =>
    {
        getFavoritesMovies();
    }, [loadingMovies, user])

    const getFavoritesTvShows = async() => {

        if(user === null){
            return
        }
        const q = query(collection(db, "favorites", user.email, "tv"));
        const querySnapshot = await getDocs(q);
        let favorites = [] 
        querySnapshot.forEach(doc => {
            favorites.push({
                id: doc.id,
                ...doc.data()
            })
        });
        setFavoritesTvShows(favorites)
        setLoadingTv(false)
        return querySnapshot;
    }
    useEffect(() =>
    {
        getFavoritesTvShows();
    }, [loadingTv, user])
    
    // -------------------------------------------------------------------------------------
    // COMMENTS
    
    const addComments = async ( postComments, type, id ) => {
        // setMovieId(id)
        if(type === "movie"){
            // const docRef = await addDoc( collection( db, 'movie', id, 'comments' ), postComments );
            // const doc = await getDoc( docRef );
            // const docRef = doc(db, 'movie', id, 'comments', 'name' )
            await setDoc( doc(db, 'movie', id, 'comments', 'name' ), postComments);
            // setMovieComments( [ { ...document.data(), id: docRef.id } ] );
            setLoadingMovieComments(true)
        }else{
            const docRef = await addDoc( collection( db, 'comments', type, id ), postComments );
            const doc = await getDoc( docRef );
            setTvComments( [ { ...doc.data(), id: docRef.id } ] );
            setLoadingTvComments(true)
        }
    }


    const getMovieId = (id) => {
        setMovieId(id)
    }
    
    const getmovieComments = async() => {
        if(user === null || movieId === undefined){
            console.log("here")
            return
        }
        // try{
        //     console.log(movieId)

        //     const docRef = doc(db, 'movie', movieId)
        //     const docSnap = await getDoc(docRef)
        //     if(docSnap.exists()){
        //         console.log("EXIST")
        //     }else{
        //         console.log("DOESN'T EXIST")
        //     }

        // }catch(err){
        //     console.log(err)
        // }

        const comments = await getDocs(doc(db, 'movie', movieId, 'comments', 'name'))

        if(comments.exists()){
            console.log("EXIST")
        }else{
            console.log("DO NOT EXIST")
        }

        // const q = query(collection(db, "movie", movieId, 'comments'));
        // const querySnapshot = await getDocs(q);
        // let mComments = [] 
        // querySnapshot.forEach(doc => {
        //     mComments.push({
        //         id: doc.id,
        //         ...doc.data()
        //     })
        // });
        // setMovieComments(mComments)
        // console.log(movieComments)
        setLoadingMovieComments(false)
        // return querySnapshot;
    }
    
    useEffect(() =>
    {
        getmovieComments();
    }, [movieId, loadingMovieComments])

    const values = {
        favoritesMovies,
        favoritesTvShows, 
        addFavorite, 
        getSearch, 
        search, 
        addComments, 
        movieComments,
        getMovieId
    }

    return (
        <DataContext.Provider value={ values }>
            { props.children }
        </DataContext.Provider>
    )

}