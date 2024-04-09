import React from 'react'
import { addItems, removeItems, removeAll } from '../../Store/Slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cartList } = useSelector((state) => state.cart)
  const dispatch=useDispatch()
  const items = list.map((e, index) => {
    totalPrice+= e.quantity * (e.attributes.price*(1-e.attributes.discount/100))
    return(
      <div>
        
      </div>
    )
  })
  return (
    <>
      {cartList.length == 0 ? (
        <div className='container mt-[40vh] text-xl lg:text-3xl text-zinc-700  items-center justify-center h-[80vh]'>
          <div className='text-center'>No product has been added to the cart yet</div>
          <Link to={'/products/all-categories'} className='w-60 lg:w-80 block text-center pt-1 rounded-xl mx-auto mt-4 h-12 bg-teal-600 cursor-pointer hover:bg-teal-700 text-white'>View Products Page</Link>
        </div>
      ) : (
      {cartList}
      )}
    </>
  )
}
