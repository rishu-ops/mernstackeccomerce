import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/product/realted-product/${pid}/${cid}`);
      setRelatedProduct(data?.products || []);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2 " >
      <div className="col-md-6 card-shadow">
  <img
    src={`http://localhost:8000/api/v1/product/product-photo/${product._id}`}
    className="card-img-top"
    alt={product.name}
    height="450px"
    width="320px"
    style={{
      objectFit: "cover",
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)", // Adjust the shadow values as needed
    }}
  />
</div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Product Details</h1>
              <h6>Name: {product.name}</h6>
              <h6>Description: {product.description}</h6>
              <h6>Price: $ {product.price}</h6>
              <button className="btn btn-secondary mt-3">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <h1>Similar Products</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {relatedProduct.map((p) => (
            <div className="card  card shadow m-2" style={{ width: "18rem" }} key={p._id}>
              <img
                src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">$ {p.price}</p>
                <button className="btn btn-secondary ms-1">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
