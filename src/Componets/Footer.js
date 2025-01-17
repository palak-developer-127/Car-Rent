import React from 'react';

export default function WhoWeAre() {
    return (
        <section id="WhoWeAre" className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Flexbox for Quick Links and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Quick Links */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                            <li><a href="#PrivacyPolicy" className="hover:text-orange-500">Privacy Policy</a></li>
                            <li><a href="#Blogs" className="hover:text-orange-500">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-bold">Phone:</span> 
                                <a href="tel:+919844300066" className="hover:text-orange-500 ml-2">+91 98750 11109</a>
                            </li>
                            <li>
                                <span className="font-bold">Email:</span> 
                                <a href="mailto:support@wowcarz.in" className="hover:text-orange-500 ml-2">palakgahera12@gmail.com</a>
                            </li>
                            <li>
                                <span className="font-bold">Address:</span>
                                <p>1029, 17TH Main Road, 2nd Block, BTM 4th Stage, Bangalore, 560076.</p>
                            </li>
                            <li>
                                <span className="font-bold">Feedback:</span> 
                                <a href="mailto:feedback@wowcarz.in" className="hover:text-orange-500 ml-2">feedback@palak.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>

                        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>

                        <a 
                        rel="noreferrer" 
                        target="_blank" 
                        href="mailto:gajerapalak02@gmail.com" 
                        className="block text-white-700 text-lg hover: text-white-600 transition duration-300"
                        >
                        <strong className="font-medium">E-mail:</strong> 
                        <span className="text-gray-500"> gajerapalak02@gmail.com</span>
                        </a>

                        <a 
                            rel="noreferrer"
                            target='_blank'
                            href='Facebook:palak_Gajera 127'
                            className="block text-white-700 text-lg hover:text-purple-600 transition duration-300"
                        >
                        <strong className="font-medium">Facebook:</strong> 
                        <span className="text-gray-500"> palak_Gajera 127</span>  
                        </a>
                        
                        <a 
                        href="tel:+919875011109"
                        className="block text-white-700 text-lg hover:text-purple-600 transition duration-300"
                        >
                        <strong className="font-medium">Phone:</strong> 
                        <span className="text-gray-500"> +91 98750 11109</span>
                        </a>
                        
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-sm">
                    <p>Powered by: <strong>Palak Gajera</strong></p>
                    <p>© 2025. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
