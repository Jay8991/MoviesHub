import { collection, getDocs, getFirestore, addDoc, getDoc, orderBy, query, doc, setDoc, updateDoc, deleteDoc } from "@firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { useUserAuth } from "./UserAuthContext";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const { user } = useUserAuth()
    const [favoritesMovies, setFavoritesMovies] = useState("")
    const [favoritesTvShows, setFavoritesTvShows] = useState("")
    const [search, setSearch] = useState("")
    const [ comments, setComments ] = useState([]);
    const [loadingTv, setLoadingTv] = useState(false)
    const [loadingMovies, setLoadingMovies] = useState(false)

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

    // const getSingleMovie = (movie) => {
    //     console.log(movie)
    //     setSingleMovie(movie)
    // }

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


    // const getComments = useCallback(
    //     async () =>
    //     {
    //         const q = query( collection(db, 'posts'), orderBy( "dateCreated", "desc" ) );
            
    //         const querySnapshot = await getDocs( q );
    //         // return querySnapshot;
    //         let newPosts = [];

    //         querySnapshot.forEach(doc =>
    //         {
    //             newPosts.push({
    //                 id: doc.id,
    //                 ...doc.data()
    //             })
    //         });

    //         setPosts(newPosts);

    //         return querySnapshot;
    //     }, [ db ]
    // )

    const addComments = async ( postComments, type, id ) => {
        const docRef = await addDoc( collection( db, 'comments', type, id ), postComments );
        const doc = await getDoc( docRef );
        setComments( [ { ...doc.data(), id: docRef.id } ] );
    }

    // useEffect(() =>
    // {
    //     getPosts();
    // }, [ getPosts ])


    
    const values = {
        favoritesMovies,
        favoritesTvShows, 
        addFavorite, 
        getSearch, 
        search, 
        addComments, 
        comments,
        getFavoritesMovies,
        getFavoritesTvShows
    }

    return (
        <DataContext.Provider value={ values }>
            { props.children }
        </DataContext.Provider>
    )

}