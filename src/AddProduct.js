import React,{useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom' 



function AddProduct() {
    const [product_id,setProductid] = useState('')
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [discount_id,setDiscountId] = useState('')
    const [quantity,setQuantity] = useState('')
    const [category_id,setCategoryId] = useState('')
    const [price,setPrice] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/createProduct', {product_id,name,description,discount_id,quantity,category_id,price}).then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))
    }
    return (
    <div>
        <Link to= '/createProduct'>Create Product</Link>
       <form onSubmit={handleSubmit}>
        <h2>Add a product</h2>
        <div>
            <label htmlFor=''>product_id</label>
            <input type = "number"
            onChange={e => setProductid(e.target.value)}
            ></input>
            <label htmlFor=''>name</label>
            <input type = "text"
            onChange={e => setName(e.target.value)}></input>
            <label htmlFor=''>description</label>
            <input type = "text"
            onChange={e => setDescription(e.target.value)}></input>
            <label htmlFor=''>setDiscountId</label>
            <input type = "number"
            onChange={e => setDiscountId(e.target.value)}></input>
            <label htmlFor=''>quantity</label>
            <input type = "number"
            onChange={e => setQuantity(e.target.value)}></input>
            <label htmlFor=''>category_id</label>
            <input type = "number"
            onChange={e => setCategoryId(e.target.value)}></input>
            <label htmlFor=''>price</label>
            <input type = "number"
            onChange={e => setPrice(e.target.value)}></input>
        </div>
        <button> Submit</button>
        </form> 
    </div>
  )
}

export default AddProduct