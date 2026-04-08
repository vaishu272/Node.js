const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-6 hover:shadow-purple-500/20 hover:-translate-y-1 transition duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-semibold text-purple-400 mb-2">
        {product.title}
      </h2>

      <p className="text-slate-300 mb-3 line-clamp-3">{product.description}</p>

      <p className="text-lg font-bold text-white">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
