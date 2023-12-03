import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


const PlaceOrderScreen = () => {
  window.scrollTo(0,0)

  const placeOrderHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row order detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>customer</strong>
                </h5>
                <p>admin doe</p>
                <p>admin@email.com</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order Info</strong>
                </h5>
                <p>shipping</p>
                <p>payment method</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
          <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>deliver to</strong>
                </h5>
                <p>addresss</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message variant= 'alert-info mt-5'>Your cart is empty</Message> */}
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="" alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to = {'/'}>
                  <h6>Girls Nike shoes</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 d-flex align-items-center flex-column justify-content-center">
                <h4>quantity</h4>
                <h6>4</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column justify-content-center">
                <h4>Subtotal</h4>
                <h6>567</h6>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>545</td>
                </tr>
                <tr>
                  <td>
                    <strong>shipping</strong>
                  </td>
                  <td>213</td>
                </tr>
                <tr>
                  <td>
                    <strong>tax</strong>
                  </td>
                  <td>5</td>
                </tr>
                <td>
                  <strong>total</strong>
                </td>
                <td>5678</td>
              </tbody>
            </table>
            <button type="submit" onClick={placeOrderHandler}>
              <Link to = '/order' className='text-white'>Place Order</Link>
            </button>
            <div className="my-3 col-12">
              {/* <Mesasage variant = 'alert-danger'>{error}</Mesasage> */}
            </div>
          </div>
        </div>




      </div>
    </>
  )
}

export default PlaceOrderScreen