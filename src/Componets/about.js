import NewImg from './A1.jpg'; // Adjust based on the actual location.


//import NewImg from './path_to_your_image/Screenshot_2025.jpg';

export default function About() {
    return (
        <section id="about" className="bg-gray-0 py-8 px-4">
            <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
                {/* Left Section: Image */}
                <div className="flex-shrink-0 md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <img
                        src={NewImg}
                        alt="about service"
                        className="h-48 w-auto rounded-full shadow-lg mx-auto md:mx-0"
                    />
                </div>

                {/* Right Section: Details */}
                <div className="md:w-2/3 md:pl-8 bg-indigo-100">
                    <header className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">About Our Service:</h1>
                    </header>
                    <p className="text-gray-600 mb-6">
                        We are a trusted car rental service providing a wide variety of vehicles for short-term and long-term rentals. 
                        Whether you're traveling for business or pleasure, we offer affordable and reliable options to suit your needs. 
                        Our goal is to make your journey as smooth as possible by offering convenient booking, transparent pricing, 
                        and excellent customer service.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Service:</strong> Car Rental and Leasing</li>
                        <li><strong>Vehicles Available:</strong> Sedans, SUVs, Luxury Cars, and more</li>
                        <li><strong>Rental Duration:</strong> Daily, Weekly, Monthly</li>
                        <li><strong>Locations:</strong> Available in major cities</li>
                        <li><strong>Features:</strong> 24/7 Customer Support, Free Delivery and Pickup</li>
                        <li><strong>Booking:</strong> Easy online booking with flexible payment options</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
