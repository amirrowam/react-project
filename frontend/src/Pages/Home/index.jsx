import React from 'react'
import Slider from './Slider'
import DiscountSection from './discountSection'
import Categories from './Categories'
import NewestSection from './NewsetSection'

export default function Home() {
  return (
    <>
      <Slider />
      <NewestSection />
      <DiscountSection />
      <Categories />
    </>
  )
}
