import PropTypes from 'prop-types';

const Topratedproductcard = ({ product }) => {
  const { name, type, price, rating, brandName, details, img } = product;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <div className="product-image relative">
        <img src={img} alt={name} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-300">
            View Details
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>

      <div className="product-details p-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{details}</p>
        <p className="text-gray-600 dark:text-gray-400">Type: {type}</p>
        <p className="text-gray-600 dark:text-gray-400">Brand: {brandName}</p>
        <p className="text-gray-600 dark:text-gray-400">Price: ${price}</p>
        <p className="text-gray-600 dark:text-gray-400">Rating: {rating}</p>
      </div>
    </div>
  );
};

Topratedproductcard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    brandName: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Topratedproductcard;
