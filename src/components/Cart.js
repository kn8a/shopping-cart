import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/cart.css'

const Cart = (props) => {
    
    const products = props.items.map(item => {  //map array and add item total
        return {...item, total: itemTotal(item.qty, item.price)}
    });

    function itemTotal(qty, price) {
        return ((Number(qty)*Number(price)).toFixed(2))
    }

    return(
        <div className='cart-items'>this is cart
            
                {products.map(product => {
                    return(
                        <div className='cart-item'>
                            <div className='cart-item-left'>
                                <div className='cart-img'>
                                    <img className='cart-image' src={product.image} alt={product.title}></img>
                                </div>
                                <div className='cart-item-info'>
                                    <div>{product.title}</div>
                                    
                                        <div>Price: {' ' + '$' + product.price + ' '}</div>
                                        <div>
                                            Quantity:{' '} 
                                            <button>-</button>
                                            {' ' + product.qty + ' '}
                                            <button>+</button>
                                        </div>
                                    
                                </div>
                            </div>
                            <div className='item-total'>
                                <div>{product.total}</div>

                            </div>
                            
                            

                        </div>
                        
                    )
                    
                })}
            
            
        </div>
    )
}

export default Cart;