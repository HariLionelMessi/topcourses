import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Filter = ({ filterData, category, setCategory }) => {
    // function pulltoast(e) {
    //     toast.success("Loaded " + e.target.textContent + " courses");
    // }

    function handleClickCategory(title) {
        setCategory(title)
    }

    return (
        <div className='w-11/12 max-w-max  flex flex-wrap space-x-4 mx-auto py-4 justify-center'>
            {
                filterData.map((data, index) => {
                    return (
                        <button
                            className={`text-lg px-2 py-1 rounded-md font-medium 
                                   text-white bg-black hover:bg-opacity-50 border-2 
                                     transition-all duration-300
                                     ${category === data.title ?
                                    "bg-opacity-60 border-white" :
                                    "bg-opacity-40 border-transparent"}
                            `}

                            key={index} onClick={() => handleClickCategory(data.title)}>{data.title}</button>
                    )
                })
            }
        </div>
    )
}

export default Filter