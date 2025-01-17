import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import { Products } from './Shop.tsx'
import CartItem from '../components/CartItem.tsx'

export interface CartProps {
    cart: { product: Products, quantity: number }[],
    onRemove: (id: number) => void,
    onQuantityChange: (id: number, quantity: number) => void
}

export const Cart = ({ cart, onRemove, onQuantityChange }: CartProps) => {

    const getTotal = (cart: any[]) => {
        return cart.reduce((acc: number, { product, quantity }) => acc + parseInt(product.price) * quantity, 0)
    }
    const getItemCount = (cart: any[]) => {
        return cart.reduce((acc: number, { quantity }) => acc + quantity, 0)
    }
    const total = getTotal(cart)
    const itemCount = getItemCount(cart)

    return (
        <div className='cart'>
            <Navbar />

            {/* <div className='cart-layout'>
                <h1>My Cart</h1>
                {cart?.map((c) => (
                    <div className='cart-items' key={c.product.id}>
                        <img src={c.product.image} alt={c.product.title} />
                        <h6>{c.product.title}</h6>
                        <div>
                            <h6>Price</h6>
                            <p>{c.product.price}</p>
                        </div>
                        <div>
                            <h6>Quantity</h6>
                            <p>1</p>
                        </div>
                        <div>
                            <h6>Total</h6>
                            <p>111</p>
                        </div>
                        <button>Remove</button>
                    </div>
                ))}
            </div>
            <hr />
            <div className='cart-checkout'>
                <h4>X Total Items</h4>
                <h4>Price</h4>
            </div> */}

            <div className='cart-container'>
                <h1>Your Cart</h1>
                <div className='cart-item'>
                    {cart.length === 0 ? (
                        <p></p>
                    ) : (
                        cart.map(({ product, quantity }) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                quantity={quantity}
                                onRemove={onRemove}
                                onQuantityChange={onQuantityChange}
                            />
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className='cart-summary'>
                        <div className='summary-item'>
                            <span>Total items:</span>
                            <span className='total-items'>{itemCount}</span>
                        </div>
                        <div className='summary-item total'>
                            <span>Total:</span>
                            <span className='total-price'>{total}</span>
                        </div>
                        <button className='checkout-button'>Checkout</button>
                    </div>
                )}
            </div>
        </div>
    )
}
