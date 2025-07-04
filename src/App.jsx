import React, { useState } from 'react';
import Select from 'react-select';

const dietaryRestrictions = [
  { value: 'celiac', label: 'Celiac' },
  { value: 'halal', label: 'Halal' },
  { value: 'peanuts', label: 'Peanuts' },
  { value: 'shellfish', label: 'Shellfish' },
  { value: 'soy', label: 'Soy' },
  { value: 'tree-nuts', label: 'Tree Nuts' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
];

const cuisine = [
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'american', label: 'American' },
  { value: 'indian', label: 'Indian' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'middle-eastern', label: 'Middle Eastern' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'sushi', label: 'Sushi' },
  { value: 'thai', label: 'Thai' },
  { value: 'vietnamese', label: 'Vietnamese' },
];


/* const rating = [
  { value: 'one-star', label: '1 \u2605\u2606\u2606\u2606\u2606 ' },
  { value: 'two-star', label: '2 \u2605\u2605\u2606\u2606\u2606' },
  { value: 'three-star', label: '3 \u2605\u2605\u2605\u2606\u2606' },
  { value: 'four-star', label: '4 \u2605\u2605\u2605\u2605\u2606' },
  { value: 'five-star', label: '5 \u2605\u2605\u2605\u2605\u2605' },
]; */

const rating = [
  { value: 1, label: '1+ \u2605 ' },
  { value: 2, label: '2+ \u2605' },
  { value: 3, label: '3+ \u2605' },
  { value: 4, label: '4+ \u2605' },
  { value: 5, label: '5 \u2605' },
];

const price = [
  { value: 'price1', label: 'Under $20' },
  { value: 'price2', label: '$21 to $40' },
  { value: 'price3', label: '$41 to $100' },
  { value: 'price4', label: '> $100' },
];

const restaurantData = [
  {
    id: 1,
    name: "Bold Butchery",
    image:"",
    cuisine: "middle-eastern",
    rating: 4,
    price: "price2",
    dietary: ["halal"],
    website: "https://www.boldshawarma.com",
    description: "Straightforward restaurant preparing shawarma & falafel wraps, plus burgers & poutine.",
  },
  {
    id: 2,
    name: "Rebar",
    image:"",
    cuisine: "american",
    rating: 4,
    price: "price2",
    dietary: ["vegetarian"],
    website: "https://www.rebarfoods.com",
    description: "Rebar is a pioneering West Coast institution that has evolved from humble beginnings into a vibrant, unique dining destination known for its nourishing, health-supporting, and eclectically creative fresh food, engaging all senses from the moment you enter.",
  },
  {
    id: 3,
    name: "La Taquisa",
    image:"",
    cuisine: "mexican",
    rating: 4,
    price: "price1",
    dietary: ["peanuts", "vegan", "vegetarian"],
    website: "https://www.lataquisa.com/locations/downtown/menu/",
    description: "La Taquisa is a locally owned, family-run business combining authentic Guadalajara family recipes from Sindy with Scott's 22 years of culinary experience to offer an exceptional Mexican dining experience featuring made-from-scratch fillings, salsas, and fresh, pressed-to-order gluten-free corn tortillas.",
  },
  {
    id: 4,
    name: "MaiiZ Nixtamal Eatery & Tortilleria",
    image:"",
    cuisine: "mexican",
    rating: 5,
    price: "price2",
    dietary: ["celiac"],
    website: "https://maiiz.ca",
    description: "MAiiZ Nixtamal is a restaurant committed to providing honest, transparent food, prioritizing local farmers and organic BC-grown corn in their mission to make nixtamalized corn products more accessible. They strive for sustainability, reduce environmental impact through local sourcing, and aim to grow as a purpose-driven business while educating the community on the nutritional and cultural importance of nixtamalization.",
  },
  {
    id: 5,
    name: "Frankies",
    image:"",
    cuisine: "italian",
    rating: 4,
    price: "price2",
    dietary: ["shellfish"],
    website: "http://frankiesmoderndiner.com",
    description: "Frankie's is a family-friendly restaurant in Victoria, BC, dedicated to crafting diverse breakfast, lunch, and dinner menus with fresh, local ingredients and a lot of love, ensuring a delicious and inclusive dining experience for everyone.",
  }
]

const App = () => {
  const [selectedDietary, setSelectedDietary] = useState([])
  const [selectedCuisine, setSelectedCuisine] = useState(null)
  const [selectedRating, setSelectedRating] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)

  const filteredRestaurants = restaurantData.filter((restaurant) => {
    const dietaryMatch = selectedDietary.length === 0 || selectedDietary.every((d) => restaurant.dietary.includes(d.value))

    const cuisineMatch = !selectedCuisine || restaurant.cuisine === selectedCuisine.value;

    const ratingMatch = !selectedRating || restaurant.rating >= parseInt(selectedRating.value)

    const priceMatch = !selectedPrice || restaurant.price === selectedPrice.value

    return dietaryMatch && cuisineMatch && ratingMatch && priceMatch
  })


  return (
    <div>
      {/* Header */}
      <header className="flex flex-row border-b-2 border-blue-950 justify-around items-center">
        <h1 className="text-2xl ml-2">Title</h1>
        <button className="text-lg bg-blue-400 rounded-md m-2 px-2">Home</button>
      </header>

      {/* Filters */}
      <div className='grid grid-cols-4 gap-4 border-b-2 border-blue-950'>
        <Select
          closeMenuOnSelect={false}
          isMulti
          name="dietary-restrictions"
          options={dietaryRestrictions}
          className="basic-multi-select"
          classNamePrefix="select"
          value={selectedDietary}
          onChange={setSelectedDietary}
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="cuisine"
          options={cuisine}
          className="basic-multi-select"
          classNamePrefix="select"
          value={selectedCuisine}
          onChange={setSelectedCuisine}
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="rating"
          options={rating}
          className="basic-multi-select"
          classNamePrefix="select"
          value={selectedRating}
          onChange={setSelectedRating}
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="price"
          options={price}
          className="basic-multi-select"
          classNamePrefix="select"
          value={selectedPrice}
          onChange={setSelectedPrice}
        />
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {filteredRestaurants.length === 0 ? (
          <p>No restaurants match the selected filters.</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <div 
            key={restaurant.id} 
            className="border rounded-lg shadow-md p-4 flex flex-col"
            >
              <div className="flex flex-row">
                <img 
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-40 h-40 object-cover mb-4 rounded"
                />

                <div className="flex flex-col items-center justify-center w-full">
                  <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>

                  <p className="mb-2">
                    <span className="font-semibold">Rating:</span> {" "}
                    {
                      rating.find((p) => p.value === restaurant.rating)?.label
                    }
                  </p>

                  <p className="mb-2">
                    <span className="font-semibold">Price:</span>{" "}
                    {
                      price.find((p) => p.value === restaurant.price)?.label
                    }
                  </p>

                  <p className="mb-2">
                    <span className="font-semibold">Dietary:</span>{" "}
                    {restaurant.dietary.map((d) => (
                      <span key={d} className="mr-1 px-2 py-1 bg-blue-100 rounded text-sm">
                        {dietaryRestrictions.find((dr) => dr.value === d)?.label}
                      </span>
                    ))}
                  </p>

                  {restaurant.website && (
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>

              <p>{restaurant.description}</p>
              
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
