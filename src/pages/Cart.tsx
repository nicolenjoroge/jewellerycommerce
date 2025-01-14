import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import { Products } from './Shop'

interface CartProps {
    product: Products
}

export const Cart: React.FC = () => {

    const [cart, setCart] = useState<CartProps[]>([])

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/carts')
                const data = await res.json()
                if (!res.ok) {
                    console.log('Failed')
                }
                setCart(data.products)
            } catch (err: any) {
                console.log(err.message)
            }
        }
        fetchCartItems()
    }, [])
    return (
        <div className='cart'>
            <Navbar />

            <div className='cart-layout'>
                <h1>My Cart</h1>
                {cart?.map((c) => (
                    <div className='cart-item' key={c.product.id}>
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
            </div>
        </div>
    )
}
