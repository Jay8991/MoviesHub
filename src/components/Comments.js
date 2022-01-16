import React from 'react'

export const Comments = (props) => {
    return (
        <div>
            <li className='list-group-item text-light nav-color border-white'>
                <p>{props.comment.comment}</p> 
                <p>
                    <cite>&mdash; {props.comment.user}</cite>
                    <span className='float-right'>
                        {/* <small>{props.comment.dateCreated}</small> */}
                    </span>
                </p>
            </li>
        </div>
    )
}
