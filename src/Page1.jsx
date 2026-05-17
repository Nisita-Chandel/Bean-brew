import React from 'react'

const Page1 = () => {
  return (
    <div className="font-serif px-8 mt-10">
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
        
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/e8/59/37/e85937aea82ba3cca306f63e907d9e18.jpg"
          alt="Coffee"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight w-[500px]">
            Freshly Roasted
            <span className="block text-6xl md:text-8xl text-yellow-300">
              COFFEE
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl w-[450px] text-gray-200">
            Enjoy premium handcrafted coffee made from the finest roasted beans.
            Start your day with a perfect cup.
          </p>

          {/* Button */}
          <button className="mt-8 bg-yellow-600 hover:bg-yellow-700 transition duration-300 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page1