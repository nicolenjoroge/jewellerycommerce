import React from 'react'
import { Products } from '../pages/Shop.tsx'

interface CartItemProps {
    product: Products,
    quantity: number,
    onRemove: (id: number) => void,
    onQuantityChange: (id: number, newQuantity: number) => void
}

const CartItem = ({product, quantity, onRemove, onQuantityChange}: CartItemProps) => {
    const handleDecrease = () => onQuantityChange(product.id, quantity + 1)
    const handleIncrease = () => onQuantityChange(product.id, Math.max(1, quantity - 1))

  return (
    <div className='cart-item'>
        <img className="cart-item-image" src={product.image} alt={product.title}/>
        <div className='cart-item-details'>
            <h3 className='cart-item-title'>{product.title}</h3>
            <p className='cart-item-category'>{product.category}</p>
            <div className='quantity-controls'>
                <button className='quantity-decrease' onClick={handleDecrease}>-</button>
                <input 
                    type='number'
                    value={quantity}
                    min="1"
                    className='quantity-input'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onQuantityChange(product.id, Number(e.target.value))}
                />
                <button className='quantity-increase' onClick={handleIncrease}>+</button>
            </div>
        </div>
        <div className='cart-item-price'>
            <p className='price'>${(parseInt(product.price) * quantity)}</p>
            <button className='remove-item' onClick={() => onRemove(product.id)}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem