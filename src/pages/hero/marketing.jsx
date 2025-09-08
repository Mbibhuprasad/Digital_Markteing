import React, { useEffect, useRef, useState } from "react";

const MarketingImpactDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Stats data with enhanced icons and colors
  const stats = [
    {
      id: 1,
      value: "100% Easy setup ",
      label: "We take care of all the setup work.",
      icon: "⚡", // lightning = fast setup
      color: "from-blue-500 to-blue-600",
      bgGlow: "shadow-blue-500/25",
    },
    {
      id: 2,
      value: "Data-Driven Insights ",
      label: "Smarter decisions powered by accurate data.",
      icon: "📊", // bar chart = data insights
      color: "from-pink-500 to-pink-600",
      bgGlow: "shadow-pink-500/25",
    },
    {
      id: 3,
      value: "Smarter Decisions ",
      label: "We use data to guide every step for better results.",
      icon: "🧠", // brain = smarter thinking
      color: "from-emerald-500 to-emerald-600",
      bgGlow: "shadow-emerald-500/25",
    },
    {
      id: 4,
      value: "Measurable Value",
      label: "Proven strategies that deliver tangible results.",
      icon: "📈", // upward chart = measurable growth
      color: "from-violet-500 to-violet-600",
      bgGlow: "shadow-violet-500/25",
    },
    {
      id: 5,
      value: "Sustainable Growth",
      label: "Consistent revenue growth you can rely on",
      icon: "🌱", // plant = sustainable growth
      color: "from-orange-500 to-orange-600",
      bgGlow: "shadow-orange-500/25",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechNova Inc.",
      quote:
        "Their marketing insights helped us double our online conversions in just 3 months!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "David Lee",
      company: "BrightPath Agency",
      quote:
        "A truly data-driven team. We trust them with every product launch now.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Davis",
      company: "StartUpFuel",
      quote: "From strategy to execution — they simply get digital growth.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Chen",
      company: "GrowthLab",
      quote:
        "ROI skyrocketed. This team knows how to blend creativity and analytics.",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-[95rem] mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 pt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#8BD005] to-[#7BBE04] bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wide">
              Revenue Analytics Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8BD005] via-[#7BBE04] to-[#6BAD03] bg-clip-text text-transparent mb-8 leading-tight">
            Uncover The Impact of
            <br />
            <span className="bg-gradient-to-r from-[#8BD005] to-[#7BBE04] bg-clip-text text-transparent">
              Marketing on Revenue
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our expert-led strategies are backed by our award-winning
            technology. Together, our clients are empowered to make informed and
            strategic marketing decisions, ensuring they stay ahead in the
            ever-evolving digital landscape.
          </p>
        </div>

        {/* Dashboard Section */}
        <div
          className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/20 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-[#8BD005] via-[#7BBE04] to-[#6BAD03] text-white p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Discover RevenueCloudFX
              </h2>
              <p className="opacity-90 text-lg font-light">
                Advanced marketing analytics for revenue growth
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-8 md:p-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl ${
                  stat.bgGlow
                } transition-all duration-500 border border-gray-100/50 backdrop-blur-sm hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`,
                }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl w-20 h-20 mx-auto"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div
          className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wide mb-4 block">
              Client Success Stories
            </span>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses who trusted us with their growth
            </p>
          </div>

          {/* Enhanced Infinite Auto-Scroll Carousel */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>

            <div
              className="flex space-x-8 animate-scroll"
              onMouseEnter={(e) => {
                e.currentTarget.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animationPlayState = "running";
              }}
              style={{
                animation: "scroll 40s linear infinite",
              }}
            >
              {[...testimonials, ...testimonials].map((client, i) => (
                <div
                  key={i}
                  className="min-w-[350px] max-w-[350px] bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm group hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={client.img}
                        alt={client.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">
                        {client.name}
                      </p>
                      <p className="text-gray-500 font-medium">
                        {client.company}
                      </p>
                      <StarRating rating={client.rating} />
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-gray-600 leading-relaxed italic">
                      "{client.quote}"
                    </p>
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200 font-serif">
                      "
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group bg-gradient-to-r from-[#8BD005] to-[#7BBE04] text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-violet-700">
            <span className="flex items-center space-x-2">
              <span>Get Started Today</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Tailwind keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default MarketingImpactDashboard;
