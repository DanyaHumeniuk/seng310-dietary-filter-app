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
  { value: 'hamburger', label: 'Hamburger' },
  { value: 'indian', label: 'Indian' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'middle-easter', label: 'Middle Easter' },
  { value: 'pizza', label: 'Pizza' },
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
  { value: 'one-star', label: '1+ \u2605 ' },
  { value: 'two-star', label: '2+ \u2605' },
  { value: 'three-star', label: '3+ \u2605' },
  { value: 'four-star', label: '4+ \u2605' },
  { value: 'five-star', label: '5 \u2605' },
];

const price = [
  { value: 'price1', label: 'Under $20' },
  { value: 'price2', label: '$21 to $40' },
  { value: 'price3', label: '$41 to $100' },
  { value: 'price4', label: '> $100' },
];

const App = () => {
  return (
    <div>
      <header className="flex flex-row border-b-2 border-blue-950 justify-around items-center">
        <h1 className="text-2xl ml-2">Title</h1>
        <button className="text-lg bg-blue-400 rounded-md m-2 px-2">Home</button>
      </header>
      
      <div className='grid grid-cols-4 gap-4'>
        <Select
          closeMenuOnSelect={false}
          isMulti
          name="dietary-restrictions"
          options={dietaryRestrictions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="cuisine"
          options={cuisine}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="rating"
          options={rating}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Select
          isClearable={true}
          closeMenuOnSelect={false}
          name="price"
          options={price}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

    </div>
  )
}

export default App
