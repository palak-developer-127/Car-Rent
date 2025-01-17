
import CarImage from "./car4.jpeg"; // Replace with the correct path to your image

export default function Main() {
  return (
    <section
      id="main"
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${CarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          Rent A Car Which Suits Your Purpose
        </h2>
        <p className="text-lg lg:text-xl mb-6">
          Browse our Exclusive Fleet Range
        </p>

        {/* Date-Time Input Section */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-6">
          {/* Pickup */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm mb-1">Pickup</label>
            <input
              type="datetime-local"
              className="px-4 py-2 rounded shadow-md text-black"
            />
          </div>

          {/* Drop */}
          <div className="flex flex-col">
            <label className="text-gray-300 text-sm mb-1">Drop</label>
            <input
              type="datetime-local"
              className="px-4 py-2 rounded shadow-md text-black"
            />
          </div>
        </div>

        {/* Find Now Button */}
        <button className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-700 transition font-semibold">
          Find Now
        </button>
      </div>
    </section>
  );
}
