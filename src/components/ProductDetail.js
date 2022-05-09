import React from 'react';
import { useEffect, useState } from "react";
import uniqid from 'uniqid';
import Categories from './Categories';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import products from '../products.json'
import '../styles/productDetail.css'
import star from '../img/star.png'
import starOutline from '../img/star-outline.png'
import Products from './Products';
import Related from './Related';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'




//import '../styles/product.css'


const ProductDetail = (props) => {

    const params = useParams();

    const filteredProduct = products.filter(({id}) => id == params.id)
    const product = filteredProduct[0];
    const related = products.filter(({category}) => category == params.category);
    let relatedWithoutCurrent = related.filter(({id}) => id != params.id);
    relatedWithoutCurrent = relatedWithoutCurrent.sort(() => Math.random() - 0.5);
    const randomRelated = relatedWithoutCurrent.slice(0,4);



    
    

    return(
        <div>
            <div className='product-details'>
                <h1>{product.title}</h1>
                
                <p>
                <div><Rating fractions={2} emptySymbol={<img src={starOutline} alt='empty star' className="icon" />} fullSymbol={<img src={star} alt='star' className="icon" />} initialRating={product.rating.rate} readonly/> {product.rating.rate}/5</div>
                <div>Based on{" " + product.rating.count} reviews</div>
                </p>
                <div>
                    <Zoom>
                        <img
                        alt="that wanaka tree"
                        src={product.image}
                        width="300"
                        />
                    </Zoom>
                </div>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
                <button>Add to cart</button>

                
            </div>
            <div>
                <p>Related products:</p>
                <Related related={related}/>
                <Products products={randomRelated}/>
                
            </div>
        </div> 
    )
}

export default ProductDetail;