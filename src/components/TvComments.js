import React, { useContext } from 'react'
import { DataContext } from '../context/Data'
import { Comments } from './Comments'

export const TvComments = () => {
    const { tvComments } = useContext(DataContext)
    const comments = [...tvComments]
    // console.log(comments)

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
