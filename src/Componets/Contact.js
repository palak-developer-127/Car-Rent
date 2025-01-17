import Book from "./hw1.jpeg";
import Upload from "./upload.png";
import GetVehicle from "./pp.png";
import Return from "./return.png";

export default function Contact() {
    let works = [
        {
            name: "Book",
            description: "Search and book a car on our site.",
            img: Book
        },
        {
            name: "Upload Documents",
            description: "Upload your documents and pay small security deposit.",
            img: Upload
        },
        {
            name: "Get Vehicle",
            description: "Take our vehicle from our hub or get it on your doorstep.",
            img: GetVehicle
        },
        {
            name: "Return",
            description: "Return the car to the same location and fill the end checklist to end your trip.",
            img: Return
        }
    ];

    return (
        <section id="contact" className="bg-white-200 py-8">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-black-800">How It Works</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="bg-indigo-100 shadow-lg rounded-lg p-4 flex flex-col items-center text-gray-800 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        <div className="h-48 w-full bg-blue-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                            <img src={work.img} alt={work.name} className="h-full w-full object-cover" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2 text-center">{work.name}</h2>
                        <p className="text-base mb-1 text-center">{work.description}</p> {/* Font size increased */}
                    </div>
                ))}
            </div>
        </section>
    );
}
