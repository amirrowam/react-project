import React, { useEffect, useState } from "react";
import fetchApi from '../../Utils/fetchApi'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const dispatch = useDispatch()
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchApi(`products/${id}?populate=*`);
      setProduct(res.data);
    })();
  }, [id]);
  console.log(product)
  return (
    <>
      <div className="container flex mt-36">
        <div className="w-[45%]">
          <img src={import.meta.env.VITE_BASE_URL + product?.attributes?.images?.data[0]?.attributes?.url} alt="product-detail-img" className="w-full h-full rounded-3xl" />
        </div>
        <div className="w-[65%] ml-10">
          <h1 className="text-5xl text-zinc-700 font-semibold">{product?.attributes?.name}</h1>
          <p className="text-gray-500 mt-5 font-normal">{product?.attributes?.description}</p>
          <div className="space-x-2 mt-2">
            <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
            <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
            <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
            <box-icon name='star' color='#fed7aa' type='solid'></box-icon>
            <box-icon name='star' color='#fed7aa'></box-icon>
          </div>
          {product?.attributes?.discount > 0 ? <s className='text-3xl font-semibold text-zinc-700 mt-1'>
            ${product?.attributes?.price}
          </s> : <div className='text-3xl font-semibold text-zinc-700 mt-1'>
            ${product?.attributes?.price}
          </div>}
          <div ></div>
          {product?.attributes?.discount > 0 && (
            <div className="text-3xl font-semibold text-sky-400 mt-1">
              ${product?.attributes?.price * (1 - product?.attributes?.discount / 100)}
            </div>
          )}
          <div className="font-normal text-gray-400 mt-3">suggested payments with 6 months special financing</div>
          <div className="text-zinc-700 text-lg mt-4">from {product?.attributes?.categories?.data[0]?.attributes?.name} category</div>
          <div className="bg-gray-200 my-4 w-full h-[2px] rounded-full"></div>
          <div className="font-bold text-zinc-700 text-lg">Quantity</div>
          <div className="w-52 h-16 border-2 border-gray-100 mt-2 bg-gray-50 rounded-4xl items-center flex justify-between px-5">
            <span className="text-zinc-700 cursor-pointer text-4xl"><box-icon name='minus' color='#3f3f46' ></box-icon></span>
            <span className="text-xl text-orange-400">1</span>
            <span className="text-3xl text-orange-400 cursor-pointer">+</span>
          </div>
        </div>
      </div>
    </>
  )
}
