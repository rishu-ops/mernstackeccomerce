import React, { useState } from 'react'
import { useSearch } from '../../context/Search'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';



const Searchinput = () => {
     const navigate = useNavigate();
    const [values , setValue] = useSearch();
   
     const handlsubmit= async (e) => {
        e.preventDefault()

        try {
              const {data} = await axios.get(`http://localhost:8000/api/v1/product/search/${values.keyword}`)
              setValue({...values , results : data });
              navigate("/search")
        } catch (error) {
             console.log(error);
        }
     }
     
  return (
    <div>
       <form className="d-flex text-center " role='search' onSubmit={handlsubmit}>
        
          <input
            type="search"
            className="form-control me-2"
            placeholder=" Search "
            aria-label='Search'
            value={values.keyword}
            style={{width : "390px"}}
             onChange={(e) => setValue({ ...values , keyword : e.target.value})}
          />
        <button className='btn btn-outline-success' type='submit'> 
         Search
        </button>
      </form>
    </div>
  )
}

export default Searchinput
