import React from 'react'
import { Products } from '../pages/Shop.tsx'

interface SingleProductProps {
    product: Products,
    onClose: () => void
}

const FetchSingleProduct = ({ product, onClose }: SingleProductProps) => {
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
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchSingleProduct