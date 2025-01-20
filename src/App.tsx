import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import { Cart } from './pages/Cart.tsx';
import { Products } from './pages/Shop.tsx';

interface ICart {
  product: Products;
  quantity: number;
}

const App = () => {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  const handleAddToCart = (product: Products, quantity: number) => {
    setCartItems((prevCart) => {
      const exisitingProduct = prevCart.find(
        (item) => item.product.id === product.id
      );

      if (exisitingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.product.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route
          path='/cart'
          element={
            <Cart
              cart={cartItems}
              onRemove={handleRemoveFromCart}
              onQuantityChange={handleQuantityChange}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
