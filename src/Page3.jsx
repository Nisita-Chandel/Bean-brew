import React from "react";

const Page3 = () => {
  const drinks = [
    {
      id: 1,
      name: "Biscoff Milkshake",
      price: "200 AF",
      image:
        "https://i.pinimg.com/736x/0d/0e/bb/0d0ebb44f780e036faf40de121fbba57.jpg",
    },
    {
      id: 2,
      name: "Cold Coffee",
      price: "180 AF",
      image:
        "https://i.pinimg.com/736x/92/45/20/924520407570a958e12d60bb5cc820fd.jpg",
    },
    {
      id: 3,
      name: "Chocolate Shake",
      price: "220 AF",
      image:
        "https://i.pinimg.com/736x/57/e1/14/57e114f83e455f1c6d565fa6c6839963.jpg",
    },
    {
      id: 4,
      name: "Caramel Latte",
      price: "250 AF",
      image:
        "https://i.pinimg.com/736x/0d/0e/bb/0d0ebb44f780e036faf40de121fbba57.jpg",
    },
  ];

  return (
    <div className="mt-20 px-6 md:px-16 font-serif bg-[#f8f5f2] py-10">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          TOP CATEGORIES
        </h1>
        <p className="text-gray-500 mt-2">
          Explore the most bought drinks this week
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {drinks.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-center">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  ⭐ 4.8
                </span>

                <i className="ri-search-line text-lg bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200"></i>
              </div>

              <h2 className="text-xl font-medium text-gray-800 mt-4">
                {item.name}
              </h2>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button className="border border-gray-400 px-4 py-2 rounded-lg text-sm">
                  {item.price}
                </button>

                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mt-16 w-full" />
    </div>
  );
};

export default Page3;