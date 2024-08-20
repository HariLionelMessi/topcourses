import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
    const [readMore, setReadMore] = useState(false)
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses

    function likeHandler() {
        // Removing elements which already have like
        if (likedCourses.includes(props.course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id))
            toast.warning('Like Removed')
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id])
            } else {
                setLikedCourses((prev) => [...prev, props.course.id])
            }
            toast.success('Liked successfully')
        }


    }
    let description = readMore ? props.course.description : `${props.course.description.substring(0, 150)}...`
    function handleReadMore() {
        setReadMore(!readMore)
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 p-[10px] rounded-lg text-white overflow-hidden'>
            <div className='relative'>
                <img src={props.course.image.url} alt={props.course.image.alt} />

                <div className='flex justify-center items-center flex-col w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-2'>
                    <button onClick={likeHandler}>
                        {
                            (likedCourses.includes(props.course.id))
                                ? (<FcLike fontSize={'20px'} />)
                                : (<FcLikePlaceholder fontSize={'20px'} />)
                        }

                    </button>
                </div>
            </div>


            <div>
                <p className='text-2xl'>{props.course.title}</p>
                <p>
                    {description}
                    <span style={{ color: 'blue', marginLeft: '10px', cursor: 'pointer' }} onClick={handleReadMore}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Card