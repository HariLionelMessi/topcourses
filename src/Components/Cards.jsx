import React, { useState } from 'react'
import Card from './Card'

const Cards = ({ courses, category, setCategory }) => {
    const [likedCourses, setLikedCourses] = useState([])

    function getCourses() {
        if (category === 'All') {
            let allCourses = []
            Object.values(courses).forEach((arrray) => {
                arrray.forEach((course) => {
                    allCourses.push(course)
                })
            })
            console.log(allCourses);

            return allCourses
        } else {
            return courses[category]
        }

    }

    return (
        <div className='flex flex-wrap justify-center mb-4 gap-4'>
            {
                getCourses().map((course, index) => {
                    return <Card key={index} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards