import Footer from "../components/navbars/Footer"
import { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [focusedField, setFocusedField] = useState("");

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
        setFocusedField("");
    };

    const isActive = (field) => {
        return focusedField === field || formData[field];
    };
    return (
        <div>
            <div className="border-b-[1px] border-rose-500">
                <div className='flex flex-col gap-2 px-4 py-2 mb-40'>
                    <div className='flex items-center gap-2'>
                        <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
                        <span className='text-4xl font-medium font-mono'>Contacts</span>
                        <div onClick={() => window.history.back()} className='flex items-center p-1 gap-2 text-lg ml-auto cursor-pointer border-b-[2px] border-rose-500 hover:text-rose-500 transition-all duration-300'>
                            <span className='font-mono'>&lt;~~</span>
                            <span>Back</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-mono'>Get in touch with me</p>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4 w-2/3'>
                            <div className='mt-4 font-mono'>
                                I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
                            </div>
                            <div>
                                <form onSubmit={(e) => e.preventDefault()} id="contact-form" className="space-y-4">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
                                        {/* Name */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                onFocus={() => handleFocus("name")}
                                                onBlur={handleBlur}
                                                className="w-full p-3 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500"
                                            />
                                            <label
                                                className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none 
              ${isActive("name") ? "top-[-0.5rem] text-xs text-rose-500" : "top-4 text-base"}`}
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
                                                onFocus={() => handleFocus("email")}
                                                onBlur={handleBlur}
                                                className="w-full p-3 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500"
                                            />
                                            <label
                                                className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none 
              ${isActive("email") ? "top-[-0.5rem] text-xs text-rose-500" : "top-4 text-base"}`}
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
                                            onFocus={() => handleFocus("subject")}
                                            onBlur={handleBlur}
                                            className="w-full p-3 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500"
                                        />
                                        <label
                                            className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none 
            ${isActive("subject") ? "top-[-0.5rem] text-xs text-rose-500" : "top-4 text-base"}`}
                                        >
                                            Subject *
                                        </label>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <textarea
                                            rows={8}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus("message")}
                                            onBlur={handleBlur}
                                            className="w-full p-3 border-[2px] border-rose-300 text-gray-700 focus:outline-none focus:border-rose-500 resize-none"
                                        />
                                        <label
                                            className={`absolute left-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none 
            ${isActive("message") ? "top-[-0.5rem] text-xs text-rose-500" : "top-4 text-base"}`}
                                        >
                                            Message *
                                        </label>
                                    </div>

                                    {/* Submit */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-8 py-3 text-gray-800 font-medium uppercase tracking-wide focus:outline-none transition-colors border-[2px] border-rose-300 hover:border-rose-600"
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
    )
}

export default Contacts
