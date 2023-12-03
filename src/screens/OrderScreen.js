import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
// import {PaypalButton} from 'react-paypal-button-v2'

const OrderScreen = () => {
  window.scrollTo(0,0)
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5> <strong> Customer</strong></h5>
                <p>Admin</p><p><a href="http://">admin@gmail.com</a>
                </p>
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
                  <strong>order info</strong>
                </h5>
                <p>Shipping :</p>
                <p> Payment:</p>
                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">Paid on
                  </p>
                </div>
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
              <h5><strong>deliver to</strong></h5>
              <p>address</p>
              <div className="bg-danger p1 col-12">
                <p className="text-white text-center text-sm-start">Status
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message variant = 'alert-info mt-5'>Your order is empty</Message> */}
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="" alt="" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to = {'/'}>
                  <h6>Shoes</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex-column justify-content-center">
                <h4>quantity</h4>
                <h6>quantity value</h6>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>products</strong>
                  </td>
                  <td>234</td>
                </tr>
                <tr>
                  <td>
                    <strong>shipping</strong>
                  </td>
                  <td>566</td>
                </tr>
                <tr>
                  <td>
                    <strong>tax
                    </strong>
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <strong>total</strong>
                  </td>
                  <td>589</td>
                </tr>
              </tbody>
            </table>
            <div className="col-12">
              {/* <PaypalButton amount = {25}/> */}
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default OrderScreen