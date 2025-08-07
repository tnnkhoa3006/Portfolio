import React, { useState } from 'react';
import Footer from '../components/navbars/Footer';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [focusedField, setFocusedField] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField('');
    };

    const isActive = (field) => {
        return focusedField === field || formData[field];
    };

    return (
        <div className="md:pt-16">
            <div className="border-b-[1px] border-rose-500">
                <div className="flex flex-col gap-4 md:px-16 py-4 mb-12 sm:mb-16 md:mb-20">
                    <div className="flex sm:flex-row items-center gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Contacts</span>
                        </div>
                        <div
                            onClick={() => window.history.back()}
                            className="flex items-center p-2 sm:p-3 gap-2 text-sm sm:text-base md:text-lg ml-auto cursor-pointer border-[1px] border-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition-all duration-300"
                            aria-label="Go back"
                        >
                            <span className="font-mono">&lt;~~</span>
                            <span>Back</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="font-mono text-sm sm:text-base">Get in touch with me</p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4 w-full md:w-2/3">
                            <div className="mt-4 font-mono text-sm sm:text-base">
                                I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
                            </div>
                            <div>
                                <form onSubmit={(e) => e.preventDefault()} id="contact-form" className="space-y-4">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                                        {/* Name */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                className="w-full p-3 sm:p-4 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500 rounded-md"
                                            />
                                            <label
                                                className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none ${isActive('name') ? 'top-[-0.75rem] text-xs sm:text-sm text-rose-500' : 'top-3 sm:top-4 text-sm sm:text-base'
                                                    }`}
                                            >
                                                Name *
                                            </label>
                                        </div>
                                        {/* Email */}
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                className="w-full p-3 sm:p-4 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500 rounded-md"
                                            />
                                            <label
                                                className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none ${isActive('email') ? 'top-[-0.75rem] text-xs sm:text-sm text-rose-500' : 'top-3 sm:top-4 text-sm sm:text-base'
                                                    }`}
                                            >
                                                Email *
                                            </label>
                                        </div>
                                    </div>
                                    {/* Subject */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('subject')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500 rounded-md"
                                        />
                                        <label
                                            className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none ${isActive('subject') ? 'top-[-0.75rem] text-xs sm:text-sm text-rose-500' : 'top-3 sm:top-4 text-sm sm:text-base'
                                                }`}
                                        >
                                            Subject *
                                        </label>
                                    </div>
                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            rows={6}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('message')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500 rounded-md resize-none"
                                        />
                                        <label
                                            className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none ${isActive('message') ? 'top-[-0.75rem] text-xs sm:text-sm text-rose-500' : 'top-3 sm:top-4 text-sm sm:text-base'
                                                }`}
                                        >
                                            Message *
                                        </label>
                                    </div>
                                    {/* Submit */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-gray-800 font-mono font-medium uppercase tracking-wide border-[2px] border-rose-500 rounded-md hover:bg-rose-500 hover:text-white focus:outline-none transition-all duration-300"
                                        >
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;