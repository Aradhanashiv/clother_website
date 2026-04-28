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
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 ">
        {allProducts.map((product, index) => (
          <div key={index} className="overflow-hidden shadow bg-white/70">
            <ProductsSlider images={product.productImage} />
            <div className="p-5">
              <p className="font-bold md:text-lg text-md text-black mt-4">
                {product.productName}
              </p>
              <p className="font-semibold">Rs. {product.price}</p>
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
