import React from 'react'
import Header from '../components/Header'
import Rating from '../components/homeComponents/Rating'
import { Link } from 'react-router-dom'
import Message from './../components/LoadingError/Error'


const SingleProduct = () => {
  // const product will be added with backend service
  const product= []
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
                        <h6>quantity</h6>
                        <select>
                          {[...Array(product.quantity).keys()].map((x) => (
                            <option key = {x + 1} value={ x+1}>{x+1}</option>
                          ))}
                        </select>
                      </div>
                      <button className="round-black-btn">Add to Cart</button>
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

export default SingleProduct