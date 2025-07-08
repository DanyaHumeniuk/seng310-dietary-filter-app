import { dietaryRestrictions, rating, price } from '../filters.jsx';

const stars = [
  { value: 1, label: '\u2605\u2606\u2606\u2606\u2606 ' },
  { value: 2, label: '\u2605\u2605\u2606\u2606\u2606' },
  { value: 3, label: '\u2605\u2605\u2605\u2606\u2606' },
  { value: 4, label: '\u2605\u2605\u2605\u2605\u2606' },
  { value: 5, label: '\u2605\u2605\u2605\u2605\u2605' },
];

function RestaurantCard({ restaurant }) {
  return (
    <div
      key={restaurant.id}
      className="border rounded-lg shadow-md p-4 flex flex-col bg-[#FBB917]"
    >
      <div className="flex flex-row">
        <div className="w-40 h-40 overflow-hidden mb-4 rounded">
          <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>

          <p className="mb-2">
            <span className="font-semibold">Rating:</span> {" "}
            {
              stars.find((p) => p.value === restaurant.rating)?.label
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
              <span key={d} className="flex flex-wrap px-2 py-1 bg-blue-100 rounded text-sm mt-2">
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
  )
}

export default RestaurantCard