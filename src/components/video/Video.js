import React from 'react'
import "./_video.scss"

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className='video' 
        // onClick={handleVideoClick}
        >
            <div className='video__top'>
                {/* <img src={medium.url} alt='' /> */}
                {/* <LazyLoadImage src={medium.url} effect='blur' />
                <span className='video__top__duration'>{_duration}</span> */}
                <span>04:44</span>
            </div>
            <div className='video__title'>yoo
            {/* {title} */}
            </div>
            <div className='video__details'>
                <span>
                    <AiFillEye /> 5m views
                     {/* {numeral(views).format('0.a')} Views •{' '} */}
                </span>{' '}
                <span>
                    5 days ago
                    {/* {moment(publishedAt).fromNow()} */}
                </span>
            </div>
            {/* {!channelScreen && ( */}
            <div className='video__channel'>
                {/* <LazyLoadImage src={channelIcon?.url} effect='blur' /> */}
                <p>rainbow hat</p>
                {/* <p>{channelTitle}</p> */}
            </div>
            {/* )} */}
        </div>
    )
}

export default Video