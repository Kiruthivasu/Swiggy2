import sw1 from "../assets/sw1.jpg";
import sw2 from "../assets/sw2.jpg";
import sw3 from "../assets/sw3.jpg";
import sw4 from "../assets/sw4.jpg";

function Card() {
  return (
    <section className="px-16 py-10">

      <h2 className="text-2xl font-bold mb-6">
        Popular Restaurants
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
      
        <div className="w-64 hover:scale-105 transition">
          <img
            src={sw1}
            alt="Food"
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="text-lg font-bold mt-3">
            Restaurant 1
          </h3>

          <p className="text-gray-600">
            ⭐ 4.5 • 30 mins
          </p>

          <p className="text-gray-500">
            South Indian, Chinese
          </p>
        </div>

       
        <div className="w-64 hover:scale-105 transition">
          <img
            src={sw2}
            alt="Food"
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="text-lg font-bold mt-3">
            Restaurant 2
          </h3>

          <p className="text-gray-600">
            ⭐ 4.3 • 25 mins
          </p>

          <p className="text-gray-500">
            Indian, Fast Food
          </p>
        </div>

        <div className="w-64 hover:scale-105 transition">
          <img
            src={sw3}
            alt="Food"
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="text-lg font-bold mt-3">
            Restaurant 3
          </h3>

          <p className="text-gray-600">
            ⭐ 4.6 • 35 mins
          </p>

          <p className="text-gray-500">
            Pizza, Burgers
          </p>
        </div>

       
        <div className="w-64 hover:scale-105 transition">
          <img
            src={sw4}
            alt="Food"
            className="w-full h-48 object-cover rounded-xl"
          />

          <h3 className="text-lg font-bold mt-3">
            Restaurant 4
          </h3>

          <p className="text-gray-600">
            ⭐ 4.4 • 30 mins
          </p>

          <p className="text-gray-500">
            Biryani, Indian
          </p>
        </div>

      </div>

    </section>
  );
}

export default Card;