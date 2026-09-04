import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  { name: 'Aloe Vera', cost: '$10', image: 'https://via.placeholder.com/150' },
  { name: 'Snake Plant', cost: '$15', image: 'https://via.placeholder.com/150' },
  { name: 'Peace Lily', cost: '$12', image: 'https://via.placeholder.com/150' }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      {plantsArray.map((plant, index) => (
        <div key={index} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
