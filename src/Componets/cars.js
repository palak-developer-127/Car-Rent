import HyundaiExter from "./H1.webp";
import Brezza from "./V1.jpeg";
import KUV100 from "./kq.webp";
import Ertiga from './e1.webp';
import Baleno from './B.webp';
import Swift from './swift.webp';
import Hyundai from './hyundai.avif';
import Thar from './Thar.webp';

export default function Cars() {
    const cars = [
        {
            name: "Hyundai Exter",
            seats: "5 Seater",
            transmission: "Manual",
            fuel: "Petrol",
            price: "₹2500/day",
            availability: "Available",
            Adavnce: "₹6000/Adavnce",
            img: HyundaiExter,
        },
        {
            name: "Vitara Brezza VXI",
            seats: "5 Seater",
            transmission: "Manual",
            fuel: "Petrol",
            price: "₹2900/day",
            availability: "Available",
            Adavnce: "₹7000/Adavnce",
            img: Brezza
        },
        {
            name: "KUV100 K4",
            seats: "6 Seater",
            transmission: "Manual",
            fuel: "Diesel",
            price: "₹3200/day",
            availability: "Available",
            Adavnce: "₹8000/Adavnce",
            img: KUV100
        },
        {
            name: "Ertiga VXI",
            seats: "7 Seater",
            transmission: "Manual",
            fuel: "Petrol",
            price: "₹3500/day",
            availability: "Available",
            Adavnce: "₹9000/Adavnce",
            img: Ertiga
        },
        {
            name: "Baleno Sigma",
            seats: "5 Seater",
            transmission: "Manual",
            fuel: "Diesel",
            price: "₹4000/day",
            availability: "Available",
            Adavnce: "₹10000/Adavnce",
            img: Baleno
        },
        {
            name: "Swift VDI AT",
            seats: "5 Seater",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "3200/day",
            availability: "Available",
            Adavnce: "₹7500/Adavnce",
            img: Swift
        },
        {
            name: "Xcent Prime",
            seats: "5 Seater",
            transmission: "Manual",
            fuel: "Diesel",
            price: "₹2300/day",
            availability: "Available",
            Adavnce: "₹6000/Adavnce",
            img: Hyundai
        },
        {
            name: "Thar",
            seats: "5 Seater",
            transmission: "Manual",
            fuel: "Diesel",
            price: "₹3500/day",
            availability: "Available",
            Adavnce: "₹85000/Adavnce",
            img: Thar
        }
    ];

    return (
        <section id="cars" className="bg-gray-100 py-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Available Cars</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-gray-800 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="h-48 w-full bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                            <img src={car.img} alt={car.name} className="h-full w-full object-cover" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2 text-center">{car.name}</h2>
                        <p className="text-sm mb-1 text-center">{car.seats}</p>
                        <p className="text-sm mb-1 text-center">{car.transmission}</p>
                        <p className="text-sm mb-1 text-center">{car.fuel}</p>
                        <p className="text-lg font-bold text-gray-800 mb-1 text-center">{car.price}</p>
                        <p className="text=lg font-bold text-greay-800 mb-1 text-center">{car.Adavnce}</p>
                        <p className="text-sm mb-3 text-center text-green-500">
                            Available
                        </p>
                        {/* <button
                            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none"
                        >
                            Book Now
                        </button> */}
                         <a
                            href="#booking-form"
                          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none"
                            >
                                 Book Now 
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
