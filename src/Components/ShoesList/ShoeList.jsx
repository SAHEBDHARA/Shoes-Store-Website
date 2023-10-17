import React from 'react';

const ShoesList = ({ shoes, addToCart }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Shoes List</h2>
      {shoes.map((shoe, index) => (
        <div key={index} className="mb-4 border rounded-md p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{shoe.name}</h3>
            <p className="text-gray-700">{shoe.description}</p>
            <p>Size 6: {shoe.size6}</p>
            <p>Size 7: {shoe.size7}</p>
            <p>Size 8: {shoe.size8}</p>
          </div>
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            onClick={() => addToCart(shoe)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoesList;
