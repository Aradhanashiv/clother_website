import { useDispatch, useSelector } from "react-redux";
import ProductsSlider from "./ProductsSlider.jsx";
import { fetchAllProducts } from "../redux/productSlice.js";
import { addtoCart } from "../redux/cartSlice.js";
import { useEffect } from "react";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { allProducts, loadingAll, error } = useSelector((state) => state.product);
  // const [itemAdded,setItemAdded ] = useState([])

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

   return (
    <>
    <section id="shop">
       <div className="w-full min-h-screen bg-pink-50 p-5 ">
      <h1 className="font-semibold text-5xl text-center mb-8 text-pink-800">
        Your Fashion, Your Style
      </h1>
      <div className="grid grid-cols-4 gap-5 ">
        {allProducts.map((product, index) => (
          <div key={index} className="overflow-hidden shadow bg-white/70">
            <ProductsSlider images={product.productImage} />
            <div className="p-5">
              <p className="font-bold text-lg text-black mt-4">
                {product.productName}
              </p>
              <p className="font-semibold">Rs. {product.price}</p>
              {/* <div className="flex items-between justify-between mt-5">
                <button disabled={itemAdded.includes(product._id)}
                 className={`px-4 py-2 text-white text-semibold rounded-lg
                ${itemAdded.includes(product._id) ? "bg-green-500" : "bg-pink-500"}`}
                 onClick={()=>handleAddtoCart(product)}>
                  {itemAdded.includes(product._id)? "Go to Cart" : "Add to Cart"}
                </button>
                <button className="px-4 py-2 bg-gray-500 text-white text-semibold rounded-lg"> Buy Now</button>
              </div> */}
              <AddToCartButton cartproduct={product}/>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
};

export default AllProducts;
