import Layout from '../components/layout/Layout';
import { useSearch } from '../context/Search'
import React from 'react'
import { useCart } from "../context/Cart";
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const [values, setValues] = useSearch();
  const [cart , setCart] = useCart()
  const navigate = useNavigate()
  return (
    <Layout title={'search - results '}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? 'No product found'
              : `Found ${values?.results.length}`}
          </h6>

          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: '18rem' }} key={p._id}>
                <img
                  src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button className="btn btn-dark ms-1"    onClick={() =>navigate(`/product/${p.slug}`) } >
                    More Details
                  </button>
                  <button className="btn btn-secondary ms-1"  onClick={()=> { 
                    setCart([...cart , p]) 
                    localStorage.setItem('cart' , JSON.stringify([...cart , p]))
                    alert("added to cart")   }}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Search;
