import React from 'react'
import moment from 'moment'
import './_comment.scss'
const Comment = ({ comment }) => {
    // const {
    //     authorDisplayName,
    //     authorProfileImageUrl,
    //     publishedAt,
    //     textDisplay,
    // } = comment

    return (
        <div className='p-2 comment d-flex'>
            <img
                // src={authorProfileImageUrl}
                src=''
                alt=''
                className='mr-3 rounded-circle'
            />

            <div className='comment__body'>
                <p className='mb-1 comment__header'>
                {/* {authorDisplayName} • {moment(publishedAt).fromNow()} */}
                p p {moment('2022-08-12').fromNow()}
                </p>
                <p className='mb-0'>
                    nice
                    {/* {textDisplay} */}
                </p>
            </div>
        </div>
    )
}

export default Comment