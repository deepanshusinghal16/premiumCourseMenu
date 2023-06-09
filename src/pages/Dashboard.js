import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import { apiUrl, filterData } from "../data";
import { toast } from 'react-hot-toast';
import Spinner from "../components/Spinner";

const Dashboard = () => {

  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false);
  }



  useEffect(() => {
    fetchData();
  }, []);


  return (

    
    <>
      <div className="bg-bgDark2 min-h-[100vh] scroll-smooth">
        <Filter category={category} setCategory={setCategory} filterData={filterData} />

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center  min-h-[50vh] ">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard
