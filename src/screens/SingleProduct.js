import React, {useDispatch,useSelector, useState,useEffect } from 'react'
import Header from '../components/Header'
import {useState } from 'react'
import axios from 'axios'

// import Rating from '../components/homeComponents/Rating'
// import { Link } from 'react-router-dom'
// import Message from './../components/LoadingError/Error'


const SingleProduct = ({match}) => {
  // const product will be added with backend service
  const [product,setProduct] = useState()
  useEffect(() => {
    axios.get('http://localhost:8081/product').then(res => setProduct(res.data)).catch(err=> console.log(err)).catch(err => console.log(err))
  })

const SingleProduct = ({history,match}) => {
  const [qty,setQty]= useState(1)
  //const product will be added with backend service
  
  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state)=> state.productDetails);
  const {loading,error,product} = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch,productId]);
  
  const AddToCartHandle=(e)=> {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  
  return (
    <>
      <Header/>
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
             <div className="single-image">
              <img src="" alt="" />
             </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
                <p>{product.description}</p>

                <div className="product-count col-lg-7">
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>price</h6>
                    <span>{product.price}</span>
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    <h6>status</h6>
                    {product.quantity > 0 ? (
                      <span>In stock</span>
                    ) : (
                      <span> Unavailable</span>
                    )}
                  </div>
                  <div className="flex-box d-flex justify-content-between align-items-center">
                    {product.quantity > 0 ? (
                      <>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>status</h6>
                        <select>
                          {[...Array(product.quantity).keys()].map((x) => (
                            <option key = {x + 1} value={ x+1}>{x+1}</option>
                          ))}
                        </select>
                      </div>
                      <button onClick={AddToCartHandle} className="round-black-btn">Add to Cart</button>
                      </>
                    ):null}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
}
export default SingleProduct