import React from 'react'

const Page4 = () => {
  return (

    <div className='font-serif flex items-center justify-between gap-15 bg-[#371821] mt-10 p-20'>

      <div className='text-white p-20 mt-10'>
        <h1 className='text-xl'>Products</h1>
        <p className='w-40 text-sm mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, omnis?</p>
      </div>
      <div className='text-white p-20'>
        <h1 className='text-xl'>Category</h1>
        <p className='w-40 text-sm mt-10'>Men</p>
      </div><div className='text-white p-20 mt-10'>
        <h1 className='text-xl'>Company Info</h1>
        <p className='w-20 text-sm mt-10'>About Us Contact Us Support</p>
      </div>
      <div className="text-white p-20 mt-10 flex flex-col">
  <h1 className="text-xl">Follow</h1>

  <i className="ri-instagram-line mt-10"></i>
  <i className="ri-facebook-circle-fill"></i>
  <i className="ri-youtube-line"></i>
</div>
    </div>
  )
}

export default Page4
