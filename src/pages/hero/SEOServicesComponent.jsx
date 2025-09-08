import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEOServicesComponent = () => {
  const [activeService, setActiveService] = useState("SEO");
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Services data with images
  const services = {
    SEO: {
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your website's visibility on search engines with keyword optimization, link building, and technical SEO. Our SEO strategy ensures your brand ranks higher, drives consistent organic traffic, improves site authority, and sustains long-term growth by targeting the right audience with precision.",
      performance: "+65%",
      image:
        "https://media.istockphoto.com/id/1597792454/photo/business-people-use-seo-tools-unlocking-online-potential-boost-visibility-attract-organic.jpg?s=612x612&w=0&k=20&c=-tv6Z5F3ykWAfFSpMd5u-9Sgoe-Uv4_OCVMWhwz38Ng=",
    },
    SMM: {
      title: "Social Media Marketing (SMM)",
      description:
        "Engage and grow your audience on Facebook, Instagram, LinkedIn, TikTok, and more. With a mix of creative campaigns, data-driven strategies, and consistent brand storytelling, we help you build a loyal community, boost engagement rates, and turn followers into paying customers.",
      performance: "+45%",
      image:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcHklUKjz3P7GfroDCGULKiypFN0vwyo_wHBjoOU87JcDkKp4w2Fb5bpyY3aRfr6MKt3AuwHyv6RZGTGBhkcihofad3KpmNIRW_hseZCybrKtjXvsSMYgiYlSDMqAJ5P8xaTX6lZE_xYl9W4p3mAKOLH_E?key=eAbzQ22WOOMLNKWwF6gjmA",
    },
    Content: {
      title: "Content Marketing",
      description:
        "Craft valuable blogs, videos, and infographics to attract and retain customers. Our content marketing focuses on building thought leadership, strengthening brand authority, improving SEO, and delivering meaningful value to your audience—turning curiosity into trust and trust into conversions.",
      performance: "+55%",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230801113133/Steps-of-Content-Marketing-copy.webp",
    },
    PPC: {
      title: "Paid Ads (PPC & Google Ads)",
      description:
        "Run targeted ad campaigns that bring instant visibility, more clicks, and better conversions. With PPC, every dollar spent is optimized through advanced targeting, keyword research, and data analytics to maximize ROI, ensuring your brand consistently stays ahead of competitors.",
      performance: "+75%",
      image:
        "https://storage.googleapis.com/mbl-strapi-prd/1_d0e90a74f5/1_d0e90a74f5.svg",
    },
    CreativeMarketing: {
      title: "Content & Creative Marketing",
      description:
        "Blogs, videos, and graphics tailored to your audience — building trust and authority. We merge creativity with strategy, delivering visually striking and emotionally engaging content that amplifies brand storytelling, strengthens online presence, and inspires your audience to take action.",
      performance: "+70%",
      image:
        "https://media.istockphoto.com/id/1186285220/photo/content-marketing-news-social-media-websites-and-advertising-concept.jpg?s=612x612&w=0&k=20&c=God3SFRiRoXlE1CZfLy7otuCtDz9OgP-JrDNEQLQrYQ=",
    },

    Email: {
      title: "Email Marketing",
      description:
        "Personalized email campaigns and automation to nurture leads and boost sales. From engaging newsletters to advanced segmentation and drip campaigns, our email marketing ensures higher open rates, stronger customer relationships, and measurable revenue-driven outcomes.",
      performance: "+60%",
      image:
        "https://blog.blendee.com/wp-content/uploads/2024/11/email-marketing.jpg",
    },
    Affiliate: {
      title: "Affiliate & Influencer Marketing",
      description:
        "Partner with affiliates and influencers to expand your brand reach effectively. By collaborating with trusted voices and niche experts, we amplify credibility, drive traffic, and generate authentic conversions—helping your brand penetrate markets faster and stronger.",
      performance: "+50%",
      image:
        "https://socialbee.com/wp-content/uploads/2024/05/image8-1024x607.png",
    },
    WebUX: {
      title: "Web & UX Optimization",
      description:
        "Optimize websites for speed, design, and user experience to convert more visitors into paying customers. With responsive design, intuitive navigation, and seamless interactions, our UX strategy ensures users stay engaged, explore more, and complete purchases effortlessly.",
      performance: "+50%",
      image:
        "https://www.zilliondesigns.com/blog/wp-content/uploads/ui-ux-design-website-development.jpg",
    },
  };

  const serviceList = [
    {
      id: "SEO",
      name: "Search Engine Optimization (SEO)",
      description:
        "Boost your website's visibility on search engines with keyword optimization, link building, and technical SEO.",
    },
    {
      id: "SMM",
      name: "Social Media Marketing (SMM)",
      description:
        "Engage and grow your audience on Facebook, Instagram, LinkedIn, TikTok, and more.",
    },
    {
      id: "Content",
      name: "Content Marketing",
      description:
        "Craft valuable blogs, videos, and infographics to attract and retain customers.",
    },
    {
      id: "PPC",
      name: "Paid Ads (PPC & Google Ads)",
      description:
        "Run high-RDI paid campaigns on Google, Bing, and social media platforms.",
    },
    {
      id: "CreativeMarketing",
      name: "Content & Creative Marketing",
      description:
        "Blogs, videos, and graphics tailored to your audience — building trust and authority.",
    },
    {
      id: "Email",
      name: "Email Marketing",
      description:
        "Personalized email campaigns and automation to nurture leads and boost sales.",
    },
    {
      id: "Affiliate",
      name: "Affiliate & Influencer Marketing",
      description:
        "Partner with affiliates and influencers to expand your brand reach effectively.",
    },
    {
      id: "WebUX",
      name: "Web & UX Optimization",
      description:
        "Optimize websites for speed, design, and user experience to convert more visitors into paying customers.",
    },
  ];

  const visibleServices = showAll ? serviceList : serviceList.slice(0, 4);

  // Detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // animate only when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Actionable Analytics
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600">
            Data Empowerment
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services List */}
          <div className="w-full lg:w-2/5">
            <div className="space-y-4">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-green-100 border-l-4 border-[#8BD005] shadow-md"
                      : "bg-white border-l-4 border-gray-200 hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveService(service.id)}
                >
                  <h3 className="font-medium text-gray-800">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}

              {/* Show More / Show Less */}
              {!showAll ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#8BD005] text-white rounded-lg font-medium hover:bg-[#7BBE04] transition-colors duration-300 flex items-center justify-center"
                  onClick={() => setShowAll(true)}
                >
                  Show More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                  onClick={() => setShowAll(false)}
                >
                  Show Less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          {/* Service Details with Image */}
          <div className="w-full h-[max-content] lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg h-full"
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <motion.img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-64 object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {services[activeService].description}
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center bg-gradient-to-r from-[#8BD005] to-[#7BBE04] text-white py-2 px-4 rounded-lg"
                >
                  <span className="font-medium">Performance Boost</span>
                  <span className="ml-3 text-xl font-bold">
                    {services[activeService].performance}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SEOServicesComponent;
