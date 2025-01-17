import React, { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pickupDate: "",
        dropoffDate: "",
        pickupLocation: "",
        dropoffLocation: "",
        carName: "",
        advanceAmount: "", // For storing the advance amount
        paymentMethod: "", // For storing selected payment method
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // New state for confirmation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Details Submitted:", formData);

        // Show confirmation message
        setIsSubmitted(true);

        // Reset form (optional)
        setFormData({
            name: "",
            email: "",
            phone: "",
            pickupDate: "",
            dropoffDate: "",
            pickupLocation: "",
            dropoffLocation: "",
            carName: "",
            advanceAmount: "",
            paymentMethod: "",
        });
    };

    return (
        <section
            id="booking-form"
            className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md"
        >
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Book Your Car
            </h1>

            {/* Confirmation Message */}
            {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
                    Your booking request has been successfully submitted! We'll contact you soon.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pickupDate" className="block text-gray-700">
                            Pickup Date
                        </label>
                        <input
                            type="date"
                            id="pickupDate"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="dropoffDate" className="block text-gray-700">
                            Drop-off Date
                        </label>
                        <input
                            type="date"
                            id="dropoffDate"
                            name="dropoffDate"
                            value={formData.dropoffDate}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="pickupLocation" className="block text-gray-700">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="dropoffLocation" className="block text-gray-700">
                            Drop-off Location
                        </label>
                        <input
                            type="text"
                            id="dropoffLocation"
                            name="dropoffLocation"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="carName" className="block text-gray-700">
                            Car Name
                        </label>
                        <input
                            type="text"
                            id="carName"
                            name="carName"
                            value={formData.carName}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Advance Payment Section */}
                    <div>
                        <label htmlFor="advanceAmount" className="block text-gray-700">
                            Advance Payment Amount (₹)
                        </label>
                        <input
                            type="number"
                            id="advanceAmount"
                            name="advanceAmount"
                            value={formData.advanceAmount}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Payment Method Selection */}
                    <div>
                        <label htmlFor="paymentMethod" className="block text-gray-700">
                            Payment Method
                        </label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded"
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Upi">Upi</option>
                        </select>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                    >
                        Submit Booking
                    </button>
                </div>
            </form>
        </section>
    );
}
