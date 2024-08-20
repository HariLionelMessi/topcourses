
const Filter = ({ filterData, category, setCategory, courses }) => {
    function handleClickCategory(title) {
        setCategory(title)
    }

    // This method extracts the ob
    const extractCategories = (data) => {
        return Object.keys(data).reduce((acc, curr) => {
            if (!acc.includes(curr)) {
                acc.push(curr);
            }
            return acc;
        }, ["All"]);
    }

    return (
        <div className='w-11/12 max-w-max  flex flex-wrap space-x-4 mx-auto py-4 justify-center'>
            {
                extractCategories(courses).map((title, index) => {
                    return (
                        <button
                            className={`text-lg px-2 py-1 rounded-md font-medium 
                                   text-white bg-black hover:bg-opacity-50 border-2 
                                     transition-all duration-300
                                     ${category === title ?
                                    "bg-opacity-60 border-white" :
                                    "bg-opacity-40 border-transparent"}
                            `}

                            key={index} onClick={() => handleClickCategory(title)}>{title}</button>
                    )
                })
            }
        </div>
    )
}

export default Filter