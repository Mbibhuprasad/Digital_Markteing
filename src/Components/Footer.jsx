import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#7BBE04] via-[#8BD005] to-[#7BBE04] text-black mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">DCS – Daya Consultancy</h2>
          <p className="text-gray-900">
            Your trusted partner in innovative Digital Marketing solutions. We
            combine creativity, strategy, and technology to drive business
            growth.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-900">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-900">
            <li>SEO Optimization</li>
            <li>Social Media Marketing</li>
            <li>Pay-Per-Click Ads</li>
            <li>Content Marketing</li>
            <li>Email Campaigns</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-900">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-900" /> info@dcs.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-900" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-900" /> Bhubaneswar, India
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 py-4 text-center text-gray-900 text-sm">
        © {new Date().getFullYear()} DCS – Daya Consultancy. All rights
        reserved.
      </div>
    </footer>
  );
}
