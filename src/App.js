import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter'
import Cards from './Components/Cards.jsx'
import Loader from './Components/Loader.jsx'

import { filterData, apiUrl } from './data.js'

// Toast import
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Components/ErrorPage.jsx';


const App = () => {
  const [courses, setCourses] = useState([])
  const [category, setCategory] = useState(filterData[0].title)
  const [load, setLoad] = useState(true)
  const [error, setError] = useState(false)

  async function fetchData() {

    try {
      const apiResponse = await fetch(apiUrl)
      const result = await apiResponse.json()
      console.log(Object.values(result.data));
      setCourses(result.data)

    } catch (error) {
      toast.error('Not fetched')
      setError(true)
    } finally {
      setLoad(false)
    }

  }
  useEffect(() => {
    fetchData()
    return (() => {
      console.log('Removed effect');

    })
  }, [])

  if (error) {
    return (
      <ErrorPage />
    )
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          {/* <Filter category={category} setCategory={setCategory} filterData={filterData} /> */}
          <Filter category={category} setCategory={setCategory} courses={courses} />
        </div>
        <div className='w-11/12 max-w-[1200px]  mx-auto flex flex-wrap justify-center items-center min-h-[70vh]'>
          {
            (load)
              ? (
                <Loader />
              )
              : (
                <Cards courses={courses} category={category} setCategory={setCategory} />
              )
          }
        </div>
      </div>

    </div>
  );
};

export default App;
