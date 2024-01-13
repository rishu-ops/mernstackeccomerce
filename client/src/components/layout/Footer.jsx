import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' text-light p-3 h-12' style={{
        backgroundColor : '#121212'
    }}>
        <h1 className='text-center'>
 All Right Reserved &copy; Techninfoyt
        </h1>
       <p className="text-center mt-3  footer">
        <Link to='/about' > About </Link>        
              |
        <Link to='/contact'  > Contact </Link>        
              |
        <Link to='/policy'  > privacy policy </Link>        


        </p> 
    </div>
  )
}

export default Footer
