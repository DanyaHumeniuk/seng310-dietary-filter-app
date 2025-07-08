// library imports
import React, { useState } from 'react';
import Select from 'react-select';

// filters
import { dietaryRestrictions, cuisine, rating, price } from './filters.jsx';

// restuaurant data
import { restaurantData } from './restaurantData.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';

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
      <header className="flex flex-row border-b-2 border-blue-950 justify-around items-center bg-[#FF6600]">
        <h1 className="text-2xl ml-2 font-extrabold">FindMeFood</h1>
        <a href="/">
          <button className="text-lg bg-blue-400 rounded-md m-2 px-2">Reset Filters</button>
        </a>
      </header>

      {/* Filters */}
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 border-b-2 border-blue-950 bg-[#2C3E50] justify-center items-center px-2'>
        <Select
          placeholder='Search Dietary Restrictions...'
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
          placeholder='Search Cuisines...'
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
          placeholder='Search Ratings...'
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
          placeholder='Search Prices...'
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
      {filteredRestaurants.length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className='text-2xl'>No restaurants match the selected filters.</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </div>
      )}

    </div>
  )
}

export default App
