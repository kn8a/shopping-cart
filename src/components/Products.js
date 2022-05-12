import React from 'react';
//import { useEffect, useState } from "react";
//import uniqid from 'uniqid';
//import Categories from './Categories';
import { Link } from 'react-router-dom';


import '../styles/product.css'

const Products = (props) => {

    const products = props.products;

    return(
        <div className='products'>
            {products.map((product) => {return(
                    <div className='product' key={product.id} style={{ width: '18rem' }}>
                        <div className='image-div'>
                        <Link to={`/products/${product.category}/${product.id}`}><img className='product-image' src={product.image} alt=''/></Link>
                        </div>
                        <div className='product-info'>
                            <Link to={`/products/${product.category}/${product.id}`}>
                                <div className='title'>{product.title}</div>
                            </Link>
                            <p></p>
                            <div className='purchase'>
                                <div className='price'>${product.price}</div>
                                <button className='add-to-cart-button' onClick={()=>props.addToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
            )})}
        </div> 
    )
}

export default Products;