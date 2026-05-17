import React from 'react'

const Page2 = () => {
  const coffeeItems = [
    {
      name: "Hot Chocolate",
      img: "https://i.pinimg.com/736x/57/e1/14/57e114f83e455f1c6d565fa6c6839963.jpg"
    },
    {
      name: "Espresso Coffee",
      img: "https://i.pinimg.com/736x/92/45/20/924520407570a958e12d60bb5cc820fd.jpg"
    },
    {
      name: "Mocha Coffee",
      img: "https://i.pinimg.com/736x/0d/0e/bb/0d0ebb44f780e036faf40de121fbba57.jpg"
    },
    {
      name: "Latte Coffee",
      img: "https://i.pinimg.com/1200x/c4/73/7e/c4737e013a673e196416210867f9b1f8.jpg"
    }
  ];

  return (
    <div className="mt-40 font-serif px-10">
      
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold">
        TOP CATEGORIES
      </h1>
      <p className="text-center text-sm mt-2 text-gray-600">
        Explore the Recent Most Bought Drinks This Week
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {coffeeItems.map((item, index) => (
          <div
            key={index}
            className="w-72 bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover"
            />

            <h1 className="text-center text-xl font-semibold py-4 text-black">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page2