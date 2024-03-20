import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import 'boxicons'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Store/Slices/Auth'
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const disPatch = useDispatch()
  const { token } = useSelector(state => state.auth)

  useEffect(() => {
    const navOpenBtn = document.querySelector('.nav-icon-open')
    const navCLoseBtn = document.querySelector('.nav-icon-close')
    const nav = document.querySelector('.nav')
    const overLay = document.querySelector('.bg-blend-overlay')

    navOpenBtn.addEventListener('click', () => {
      nav.classList.remove('-left-64')
      nav.classList.add('left-0')
      overLay.classList.add('overlay--visible')
    })
    navCLoseBtn.addEventListener('click', () => {
      nav.classList.add('-left-64')
      nav.classList.remove('left-0')
      overLay.classList.remove('overlay--visible')
    })
    overLay.addEventListener('click', () => {
      nav.classList.add('-left-64')
      nav.classList.remove('left-0')
      overLay.classList.remove('overlay--visible')
    })
  })
  return (
    <>
      <header
        className="top-6 relative z-10 mb-6 right-0 left-0 w-[98%] md:w-[90%] mx-auto h-24 bg-black/50 hidden md:flex rounded-3xl items-center justify-between pr-10 px-7 py-5 text-xl backdrop-blur-[6px] ">
        <div className="flex gap-x-2.5 lg:gap-x-5 items-center text-orange-200">
          {token ? <span onClick={() => disPatch(logout())}>logout</span> : <><Link to={'/login-register'} className="items-center">
            <span className="hidden xl:inline-block">Login | Register</span>
            <box-icon name='log-in' flip='vertical' color='#fed7aa'></box-icon>
          </Link></>}
          <span className="w-px h-14 bg-white/20"></span>
          <Link to={'/cart'}>
            <box-icon name='shopping-bag' color='#fed7aa' ></box-icon>
          </Link>
        </div>
        <input type="text" className="rounded-lg h-9 w-72 bg-slate-100 text-sm pl-6" placeholder="searching ..." />
        <nav className="flex gap-x-3 lg:gap-x-5 items-center text-gray-300">
          <ul className="flex gap-x-4 lg:gap-x-5 text-base lg:text-xl">
            <li>
              <Link className="hover:text-orange-200 transition-colors" to={'/'}>Home</Link>
            </li>
            <li>
              <Link className="hover:text-orange-200 transition-colors" to={'/products/all-categories'}>Products</Link>
            </li>
            <li>
              <Link className="hover:text-orange-200 transition-colors" to={'/categories'}>Categories</Link>
            </li>
            <li>
              {/* <Link className="hover:text-orange-200 transition-colors" to={' '}>About Us</Link> */}
            </li>
          </ul>
          <div className="flex shrink-0">
            Logo
          </div>
        </nav>
      </header>
      <div className="bg-white px-4 h-16 items-center justify-between md:hidden flex">
        {/* <i className="bx bx-menu text-2xl text-zinc-700 nav-icon-open"></i> */}
        <Link onClick={() => setNavOpen(!navOpen)} className='nav-icon-open'><box-icon name='menu' color='#3f3f46'></box-icon></Link>
        <h2>LOGO</h2>
        {/* <i className="bx bx-shopping-bag text-2xl text-zinc-700"></i> */}
        <box-icon name='shopping-bag' color='#3f3f46' ></box-icon>
        <div className="nav fixed top-0 bottom-0 -left-64 w-64 min-h-screen bg-white z-20 md:hidden px-4 transition-all">
          <div className="border-b-2 border-b-gray-100 flex pt-3 pb-4 mb-6">
            {/* <i className="bx bx-x text-2xl text-zinc-700 nav-icon-close"></i> */}
            <Link onClick={() => setNavOpen(false)} className='nav-icon-close'><box-icon name='x' color='#3f3f46' ></box-icon></Link>
            <h2>LOGO</h2>
          </div>

          <div className="space-y-3">
            <Link to={'/'} className="block text-zinc-700"><Box-icon name='home'></Box-icon> Home</Link>
            <Link to={'/products/all-categories'} className="block text-zinc-700"><Box-icon name='box'></Box-icon> Products</Link>
            <Link to={'/categories'} className="block text-zinc-700"><Box-icon name='user'></Box-icon> Categories</Link>
          </div>

          <div className="border-t-2 border-t-gray-100 pt-3 pb-4 mt-6 text-base space-y-3">
            {token ? <span onClick={() => disPatch(logout())}>logout</span> : <><Link to={'/login-register'} className="items-center">
              <box-icon name='log-in' flip='vertical' color='#fed7aa'></box-icon>
              <span className="text-orange-300">Login | Register</span>
            </Link></>}
            <Link to={'/cart'} className="text-orange-300 block">
              <box-icon name='shopping-bag' color='#fed7aa'></box-icon>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`bg-blend-overlay bg-black/40 md:hidden w-full h-full z-10 fixed inset-0 transition-all ${navOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setNavOpen(false)}></div>
    </>
  )
}
