import { dietaryRestrictions, rating, price } from '../filters.jsx';

function RestaurantCard({ restaurant }) {
  return (
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
  )
}

export default RestaurantCard