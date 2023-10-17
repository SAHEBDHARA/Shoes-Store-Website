import React, { useState } from 'react';

const ShoeForm = () => {
  const [shoe, setShoe] = useState({
    name: '',
    description: '',
    size6: 0,
    size7: 0,
    size8: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoe({
      ...shoe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission and add the shoe data to your list.
    console.log(shoe);
    // You might want to call an API, update your state, or perform other actions.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border w-full rounded-md shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Add a New Shoe</h2>
      <div className="grid grid-cols-7">
        <div className="mb-4 col-span-2">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Shoe Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={shoe.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 ml-2"
          />
        </div>
        <div className="mb-4 ml-8">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700 ">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={shoe.description}
            onChange={handleChange}
            className="w-64 border rounded-md p-2 "
          />
        </div>
        <div className="mb-4 ml-28 ">
          <label htmlFor="size6" className="block text-lg font-medium text-gray-700">
            Size 6
          </label>
          <input
            type="number"
            id="size6"
            name="size6"
            value={shoe.size6}
            onChange={handleChange}
            className="w-20 border rounded-md p-2 text-sm " // Reduced the text size
          />
        </div>
        <div className="mb-4 ml-10">
          <label htmlFor="size7" className="block text-lg font-medium text-gray-700">
            Size 7
          </label>
          <input
            type="number"
            id="size7"
            name="size7"
            value={shoe.size7}
            onChange={handleChange}
            className="w-20 border rounded-md p-2 text-sm "  // Reduced the text size
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="size8" className="block text-lg font-medium text-gray-700">
            Size 8
          </label>
          <input
            type="number"
            id="size8"
            name="size8"
            value={shoe.size8}
            onChange={handleChange}
            className="w-20 border rounded-md p-2 text-sm" // Reduced the text size
          />
        </div>
        <div className="mb-4 ">
          <button type="submit" className=" text-white rounded-md p-2 w-full" style={{background: "#000c2e"}}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShoeForm;
