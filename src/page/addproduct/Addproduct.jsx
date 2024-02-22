import  { useState } from 'react';

const Addproduct = () => {
    const [product, setProduct] = useState({
        image: '',
        name: '',
        type: '',
        price: '',
        rating: '',
        brandName: '',
        details: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., save product data
        console.log('Product data:', product);
      };
    
      return (
        <div className=" bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={product.type}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product type"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product price"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={product.rating}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product rating"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={product.brandName}
              onChange={handleChange}
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter brand name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Details</label>
            <textarea
              id="details"
              name="details"
              value={product.details}
              onChange={handleChange}
              rows="4"
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter product details"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addproduct;