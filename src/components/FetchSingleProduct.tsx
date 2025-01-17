import React, { useState } from 'react'
import { Products } from '../pages/Shop.tsx'
import CartItem from './CartItem.tsx'

interface SingleProductProps {
    product: Products,
    onClose: () => void,
}

const FetchSingleProduct = ({ product, onClose}: SingleProductProps) => {

        const [ cart, setCart] = useState<{product: Products, quantity: number}[]>([])
    
        const handleAddToCart = (product: Products, quantity: number) => {
            setCart((prevCart) => {
                const exisitingProduct = prevCart.find((item) => item.product.id === product.id)
    
                if (exisitingProduct) {
                    return prevCart.map((item) =>
                        item.product.id === product.id ?
                            { ...item, quantity: item.quantity + quantity } : item
                    )
                }
                return [...prevCart, { product, quantity }]
            })
        }
    

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <div className='modal-body'>
                        <img className='modal-image' src={product.image} alt={product.title} />
                    <div className='modal-text'>
                        <h3>{product.category}</h3>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <h2>${product.price}</h2>
                        <button onClick={() => handleAddToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchSingleProduct