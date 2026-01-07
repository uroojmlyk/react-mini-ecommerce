import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      title: "Classic Hat",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    },
    {
      id: 2,
      title: "Casual Shirt",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      
      {/* NAVBAR */}
      <nav className=" shadow-xl px-8 py-4 flex justify-between items-center">
        <h1 className=" text-orange-500 text-3xl font-bold">Apnaa <span className="text-blue-500 text-3xl font-bold">Store</span></h1>
        <div className="font-medium">
           🛒 <span className="ml-1">{cart.length}</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-14 bg-gradient-to-r from-purple-500 to-indigo-500 text-orange-500">
        <h2 className="text-6xl font-bold mb-2">
          New Arrivals
        </h2>
        <p className="text-white font-bold text-4xl ">
          Modern products for modern people
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-300 rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {product.title}
                </h3>

                <p className="text-gray-600 mt-1">
                  ${product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CART SUMMARY */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h3 className="text-xl font-semibold mb-2">
          Cart Summary
        </h3>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty
          </p>
        ) : (
          <div className="bg-white rounded-lg p-4 shadow">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 last:border-none"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 UrbanStore — React Demo
      </footer>
    </div>
  );
}

export default App;
