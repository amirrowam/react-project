import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-gray-500 text-stone-300 md:px-12 transition-all grid grid-cols-1 lg:grid-cols-3 mt-5'>

        <div className='mx-6 my-6 md:my-0'>
          <div className='text-justify'>
            <div className='text-2xl text-white mb-1'>LOGO</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A error unde molestias aliquid nobis porro, quis rem quibusdam nam alias incidunt quam labore. Tenetur assumenda in labore fugiat pariatur veritatis, ullam quis iure quod nam, odio quo omnis vero. Illum temporibus in dolorem impedit, minus aperiam autem illo doloribus quasi ex consectetur, maxime vel? Fugiat tempore voluptatibus autem commodi velit.
          </div>
        </div>

        <div className='mx-6 my-6 md:my-0'>
          <div className='text-white font-semibold text-xl mb-1'>Quick Access</div>
          <div className='flex gap-3'>
            <div className='flex flex-col mr-1 child-hover:text-orange-400'>
              <div className='transition-all text-xs sm:text-base'>- Privacy</div>
              <div className='transition-all text-xs sm:text-base'>- Product Invite</div>
              <div className='transition-all text-xs sm:text-base'>- Terms of Use</div>
              <div className='transition-all text-xs sm:text-base'>- Privacy</div>
              <div className='transition-all text-xs sm:text-base'>- Product Invite</div>
              <div className='transition-all text-xs sm:text-base'>- Terms of Use</div>
            </div>
            <div className='flex flex-col ml-1 child-hover:text-orange-400'>
              <div className='transition-all text-xs sm:text-base'>- FAQs</div>
              <div className='transition-all text-xs sm:text-base'>- Job Opportunities</div>
              <div className='transition-all text-xs sm:text-base'>- Guarantee Letters</div>
              <div className='transition-all text-xs sm:text-base'>- Privacy</div>
              <div className='transition-all text-xs sm:text-base'>- Product Invite</div>
              <div className='transition-all text-xs sm:text-base'>- Terms of Use</div>
            </div>
            <div className='flex flex-col ml-1 child-hover:text-orange-400'>
              <div className='transition-all text-xs sm:text-base'>- FAQs</div>
              <div className='transition-all text-xs sm:text-base'>- Job Opportunities</div>
              <div className='transition-all text-xs sm:text-base'>- Guarantee Letters</div>
              <div className='transition-all text-xs sm:text-base'>- Privacy</div>
              <div className='transition-all text-xs sm:text-base'>- Product Invite</div>
              <div className='transition-all text-xs sm:text-base'>- Terms of Use</div>
            </div>
          </div>
        </div>

        <div className='mx-6 my-6 md:my-0'>
          <div className='text-white font-semibold text-xl mb-1'>In Contact</div>
          <div>
            <span><box-icon name='location-plus' type='solid' color='#d6d3d1'></box-icon></span>
            <span className='hover:text-orange-400 transition-all'>Location</span>
            <div className='child-hover:text-orange-400'>
              <span><box-icon name='phone' color='#d6d3d1'></box-icon></span>
              <span className='mr-2 transition-all'>+98 936 115 9100</span>
              <span><box-icon name='envelope' color='#d6d3d1'></box-icon></span><span className='transition-all'>amirow.movahedian@gmail.com</span>
            </div>
            <div className='text-orange-200 transition-all flex my-3 child-hover:text-zinc-500 child-hover:bg-orange-400 child-hover:border-orange-400'>
              <div className='w-[49%] mr-[1%] transition-all text-center border py-1 rounded-lg border-orange-200'>
                Telegram
              </div>
              <div className='w-[49%] ml-[1%] transition-all text-center border py-1 rounded-lg border-orange-200'>
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
