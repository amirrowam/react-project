import React, { useEffect, useState } from "react";
import fetchApi from "../../../Utills/fetchApi";
import { Link } from "react-router-dom";
export default function DiscountSection() {
  const [discountProduct, setDiscountProduct] = useState();
  useEffect(() => {
    (async () => {
      let res = await fetchApi("products?populate=*&filters[discount][$gt]=0");
      setDiscountProduct(res.data);
    })();
  }, []);

  const slideItems = discountProduct?.map((e, index) => (
    <div class="bg-white/80 py-2 md:p-5 shadow-md overflow-hidden rounded-2xl" key={index}>
      <img className="w-full h-full" src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} alt="discount-product-img" />
      <div className="">{e.attributes.name}</div>
      <div className="text-sky-400"><s>${e?.attributes?.price * (1 - e?.attributes?.discount / 100)}</s> <span>${e?.attributes?.price}</span></div>
      <Link to={`product-details/${e?.id}/${e?.attributes?.name.split(' ').join('-')}`}>more information</Link>
    </div>
  ));
  return (
    <>
      <div class="text-3xl mx-auto">DISCOUNT PRODUCTS</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
        {slideItems}
      </div>
    </>
  );
}
