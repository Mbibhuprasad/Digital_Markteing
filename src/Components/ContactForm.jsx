import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

// Your services data
const services = {
  SEO: { title: "Search Engine Optimization (SEO)" },
  SMM: { title: "Social Media Marketing (SMM)" },
  Content: { title: "Content Marketing" },
  PPC: { title: "Paid Ads (PPC & Google Ads)" },
  CreativeMarketing: { title: "Content & Creative Marketing" },
  Email: { title: "Email Marketing" },
  Affiliate: { title: "Affiliate & Influencer Marketing" },
  WebUX: { title: "Web & UX Optimization" },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.service) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem("contactForm")) || [];
    existingData.push(formData);
    localStorage.setItem("contactForm", JSON.stringify(existingData));

    // Success notification
    toast.success("Form submitted successfully! ✅");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-r from-[#C9F6C4] to-[#EFFDF3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src="https://eticks.io/assets/images/gif/contact-us-main.gif"
              alt="Contact Image"
              className="w-full h-auto max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Contact Us
            </h2>
            <div className="space-y-4 text-gray-900">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="info@dcs.com"
                />
              </div>

              {/* Dropdown for selecting service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium">
                  Select Service
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">-- Choose a Service --</option>
                  {Object.keys(services).map((key) => (
                    <option key={key} value={services[key].title}>
                      {services[key].title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-400 text-black py-2 rounded-md hover:bg-green-500 transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
