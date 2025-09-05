import { motion } from "framer-motion";

export default function ContactForm() {
  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call or console log for now)
    console.log("Form submitted");
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
              src="https://eticks.io/assets/images/gif/contact-us-main.gif" // Replace with your image URL
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <div className="space-y-4 text-gray-900">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  className="w-full p-2 mt-1 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="info@dcs.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
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