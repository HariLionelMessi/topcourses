import './Spinner.css'

const Loader = () => {
    return (
        <>
            <div className='flex flex-col items-center space-y-2'>
                <div className="spinner"></div>
                Loading...
            </div>
        </>
    )
}

export default Loader