import {getFirestore, doc, getDocs } from '@firebase/firestore';
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { DataContext } from '../context/Data'
import { Comments } from './Comments';

export const MovieComments = (props) => {

    const { movieComments } = useContext(DataContext)
    const comments = [...movieComments]
    console.log(comments)

    return (
        <div>
            <ul className='list-group'>
                { comments.map(c => 
                    <Comments key={c.id} comment={c}/>
                ) }
            </ul>
        </div>
    )
}
