import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Rating from './Rating'
import Pagination from './pagination'
import axios from 'axios'
// import products from '../../data/Products'
const ShopSection = () =>{
    const [products,setProducts] = useState([])
    useEffect(()=> {
        const fetchproducts = async() => {
            const {data} = await axios.get('/api/products')
            setProducts(data);
        }
        fetchproducts()
    }) 
  return (
    <div className='container'>
        <div className=''>
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {products.map((product)=> (
                                <div className="shop col-lg-4 col-md-6 col-sm-6"
                                key = {product._id}>
                                    <div className="border-product">
                                        <Link to = {`/products/${product._id}`}>
                                            <div className="shopBack">
                                                <img src={product.image} alt = {product.name}/>
                                            </div>
                                        </Link>
                                        <div className="shoptext">
                                            <p>
                                                <Link to ={`/products/${product._id}`}>
                                                    {product.name}
                                                </Link>
                                            </p>
                                            <h2>Item Description</h2>
                                            <p> {product.description}</p>
                                            <h3>${product.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {}
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopSection