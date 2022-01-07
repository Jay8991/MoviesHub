import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { DataContext } from '../context/Data'
import { collection, getDocs } from "firebase/firestore";

export const Favorites = () => {
    // const { getFavorites } = useContext(DataContext)
    // console.log(getFavorites)


    // const querySnapshot = await getDocs(collection(db, "cities"));
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });

    return (
        <div>
            <Navbar />
            <h6 className='text-white'>This is Favorites view</h6>
        </div>
    )
}
