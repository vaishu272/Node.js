import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 15;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150",
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentProducts = products.slice(start, end);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Frontend Pagination
        </h1>

        {products.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-50"
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                Previous
              </button>

              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === page
                      ? "bg-purple-500 text-white"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page + 1}
                </button>
              ))}

              <button
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-50"
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
              >
                Next
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-lg">No products found.</p>
        )}
      </div>
    </section>
  );
}

export default App;
