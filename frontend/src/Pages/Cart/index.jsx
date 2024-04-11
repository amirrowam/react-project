import React from 'react'
import { addItems, removeItems, removeAll } from '../../Store/Slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  let totalPriceWithDiscount = 0;
  let totalSubPrice = 0;
  const items = list.map((e, index) => {
    totalPriceWithDiscount += (e.quantity * (e.attributes.price * (1 - e.attributes.discount / 100))) + 45
    totalSubPrice += (e.quantity) * (e.attributes.price)
    console.log(e)
    return (
      <>
        <div key={index} className="hidden lg:grid grid-cols-2 py-6">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box"><img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} alt="cart-img" className="xl:w-[140px]" /></div>
            <div className="pro-data w-full max-w-sm ">
              <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{e?.attributes?.name}</h5>
              <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                <span>
                  {e?.attributes?.categories?.data[0]?.attributes?.name}
                </span>
              </p>
              <h6 className="font-medium text-lg leading-8 text-sky-400 max-[550px]:text-center">${(e.attributes.price * (1 - e.attributes.discount / 100))}</h6>
            </div>
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">$15</span>
            <span className="w-full max-w-[260px] text-center">%{e.attributes.discount}</span>
            <span className="w-full max-w-[260px] text-center">
              <div className="w-44 h-14 border-2 border-gray-100 mt-2 mx-auto lg:mx-0 bg-gray-50 rounded-4xl items-center flex justify-between px-5">
                <button onClick={() => dispatch(removeItems(e.id))} className="text-zinc-700 cursor-pointer text-4xl"><box-icon name='minus' color='#3f3f46' ></box-icon></button>
                {e.quantity && <span className="text-xl text-orange-400">{e.quantity}</span>}
                <button onClick={() => dispatch(addItems(e))} className="text-3xl text-orange-400 cursor-pointer">+</button>
              </div>
            </span>
            <span className="w-full max-w-[200px] text-center text-indigo-600">${e.quantity * (e.attributes.price * (1 - e.attributes.discount / 100))}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6  lg:hidden">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box"><img src={import.meta.env.VITE_BASE_URL + e?.attributes?.images?.data[0]?.attributes?.url} alt="perfume bottle image" className="xl:w-[140px]" /></div>
            <div className="pro-data w-full max-w-sm ">
              <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{e?.attributes?.name}</h5>
              <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                {e?.attributes?.categories?.data[0]?.attributes?.name}
              </p>
              <h6 className="font-medium text-lg leading-8 text-sky-400 max-[550px]:text-center"><span className='text-zinc-700'>Price of each : </span>${(e.attributes.price * (1 - e.attributes.discount / 100))}</h6>
              <h6 className="font-medium text-lg leading-8 text-red-600 max-[550px]:text-center"><span className='text-zinc-700'>Discount : </span>%{e.attributes.discount}</h6>
            </div>
          </div>
          <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
            <span className="w-full max-w-[260px] text-center">
              <div className="w-44 h-14 border-2 border-gray-100 mt-2 mx-auto lg:mx-0 bg-gray-50 rounded-4xl items-center flex justify-between px-5">
                <button onClick={() => dispatch(removeItems(e.id))} className="text-zinc-700 cursor-pointer text-4xl"><box-icon name='minus' color='#3f3f46' ></box-icon></button>
                {e.quantity && <span className="text-xl text-orange-400">{e.quantity}</span>}
                <button onClick={() => dispatch(addItems(e))} className="text-3xl text-orange-400 cursor-pointer">+</button>
              </div>
            </span>
            <h6 className="text-indigo-600 font-manrope text-xl leading-9 w-full max-w-[176px] text-center"><span className='text-zinc-700'>Total : </span>${e.quantity * (e.attributes.price * (1 - e.attributes.discount / 100))}</h6>
          </div>
        </div>
      </>
    )
  })
  console.log(list)
  return (
    <>
      <div className='mt-[95px] lg:mt-[140px]'>
        {list.length == 0 ? (
          <div className='h-[80vh] mt-[40vh] mx-auto text-xl lg:text-3xl text-zinc-700  '>
            <div className='text-center'>No product has been added to the cart yet</div>
            <Link to={'/products/all-categories'} className='flex items-center justify-center w-60 lg:w-80 rounded-xl mx-auto mt-4 h-12 bg-teal-600 cursor-pointer hover:bg-teal-700 text-white'>View Products Page</Link>
          </div>
        ) : (
          <div div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
            <div className="hidden lg:grid grid-cols-2 py-6">
              <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
              <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                <span className="w-full max-w-[260px] text-center">Discount</span>
                <span className="w-full max-w-[260px] text-center">Quantity</span>
                <span className="w-full max-w-[200px] text-center">Total</span>
              </p>
            </div>
            {items}
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto" >
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">${totalSubPrice}</h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
              </div>
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${totalPriceWithDiscount}</h6>
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
              <button onClick={() => dispatch(removeAll())} className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Clear Cart</span>
                <box-icon name='chevron-right' color='#4f46e5' ></box-icon>
              </button>
              <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                <span>to Payment</span>
                <box-icon  name='chevron-right' color='#FFF' ></box-icon>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
