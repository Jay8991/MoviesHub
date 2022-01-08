import { collection, getDocs, getFirestore, addDoc, getDoc, orderBy, query, doc, setDoc, updateDoc, deleteDoc } from "@firebase/firestore";
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
    
    const addComments = async ( postComments, type, id ) => {
        // setMovieId(id)
        if(type === "movie"){
            const docRef = await doc( collection( db, 'movie', id ), postComments );
            const doc = await setDoc( docRef );
            setMovieComments( [ { ...doc.data(), id: docRef.id } ] );
            setLoadingMovieComments(true)
        }else{
            const docRef = await addDoc( collection( db, 'comments', type, id ), postComments );
            const doc = await getDoc( docRef );
            setTvComments( [ { ...doc.data(), id: docRef.id } ] );
            setLoadingTvComments(true)
        }
    }


    const getMovieId = (m) => {
        // const id = m.toString()
        // console.log(id)
        setMovieId(m)
    }
    
    // const getmovieComments = async() => {
    //     if(user === null || movieId === undefined){
    //         console.log("here")
    //         return
    //     }
    //     try{
    //         // console.log(movieId)
    //         // const docRef = db.collection('comments').doc('movie').collection(movieId).get()
    //         // console.log(docRef)
    //         // const docSnap = await(docRef)
    //         // if(docSnap.exists()){
    //         //     console.log("EXISTS")
    //         // }else{
    //         //     console.log("DOESN'T EXIST")
    //         // }

    //         // console.log(movieId)
    //         // const commentRef = doc(db, 'comments', 'movie')
    //         // const docSnap = await getDoc(commentRef)
    //         // console.log(docSnap)
    //         // if(docSnap.exists()){
    //         //     console.log("EXISTS")
    //         // }else{
    //         //     console.log("NOPE")
    //         // }
    //         // db.collection('comments').get()

    //             // .get().then(
    //             //     doc => {
    //             //         if(doc.exists()){
    //             //             console.log("EXISTS")
    //             //         }else{
    //             //             console.log("DO NOT EXIST")
    //             //         }
    //             //     }
    //             // )

    //         //find the movie
    //         // const commentDoc = await getDoc(commentRef)
            

    //         //if movie id doesn't exist
    //         // if(!commentDoc.exists()){
    //         //     console.log("Do not exist in database, so comments for this movie")
    //         // }






    //     }catch(err){
    //         console.log(err)
    //     }

    //     // const q = query(collection(db, "comments", "movie", movieId));
    //     // const querySnapshot = await getDocs(q);
    //     // let mComments = [] 
    //     // querySnapshot.forEach(doc => {
    //     //     mComments.push({
    //     //         id: doc.id,
    //     //         ...doc.data()
    //     //     })
    //     // });
    //     // setMovieComments(mComments)
    //     setLoadingMovieComments(false)
    //     // return querySnapshot;
    // }
    
    // useEffect(() =>
    // {
    //     getmovieComments();
    // }, [loadingMovieComments, movieId])

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