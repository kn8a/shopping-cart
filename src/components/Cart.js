import React from 'react';
import '../styles/cart.css'

const Cart = (props) => {
    
    const products = props.items.map(item => {  //map array and add item total
        return {...item, total: itemTotal(item.qty, item.price)}
    });

    const cartTotal = sumArray(products);

    function sumArray(array) {
        let sum = 0;
        for (let i=0; i < array.length; i++ ) {
            sum = sum + Number(array[i].total)
        }
        return sum.toFixed(2);
    }

    const checkout = () => {
        alert(`Your purchase in the amount of $${cartTotal} would have been greatly appreciated, however, this isn't a real store, and the products here aren't real. Thank you for visiting this fake store.`)
    }

    function itemTotal(qty, price) {
        return ((Number(qty)*Number(price)).toFixed(2))
    }

    return(
        <div className='cart-items'>
            <h2>Cart</h2>
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
                                            <button onClick={()=>props.reduceQty(product.id)}>-</button>
                                            {' ' + product.qty + ' '}
                                            <button onClick={()=>props.addToCart(product.id)}>+</button>
                                            {' '}
                                            <button className='remove-button' onClick={()=>props.removeItem(product.id)}>Remove from cart</button>
                                        </div>
                                </div>
                            </div>
                            <div className='item-total'>
                                <div>{'$'+product.total}</div>
                            </div>
                        </div> 
                    )
                })}
            <div className='cart-total'>
                <div>Order total:</div> 
                <div className='order-total'>{'$'+cartTotal}</div>
            </div>
            <div className='cart-checkout'>
                <button onClick={checkout} className='checkout' >Checkout</button>
            </div>
        </div>
    )
}

export default Cart;