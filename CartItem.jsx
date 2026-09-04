import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          <div>{item.cost}</div>
          <div>
            <button onClick={() => handleDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
