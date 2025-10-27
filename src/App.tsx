import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [whatsappForm, setWhatsappForm] = useState({
    message: "",
  });

  const WHATSAPP_NUMBER = "+919830533421";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(whatsappForm.message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const videos = [
    {
      title: "Podcast to Shorts",
      description:
        "Taking Small shorts from a long podcast and turning them into hooking and attention-grabbing shorts is the main aim. Podcast clips reach masses thereby popularizing the long form Podcast",
      videoUrl: "https://www.youtube.com/embed/X9SKPcaFu5Y",
    },
    {
      title: "Brand Ad-Creatives",
      description:
        "This Nescafe Reel Ad, was a passion project and also helped me in bagging the 2nd prize in an Ad Creative competition. From Scripting to Shooting to Editing was also done under 3 days.",
      videoUrl: "https://www.youtube.com/embed/TboqHGjUa1A",
    },
    {
      title: "AI Performance Ads",
      description:
        "AI generated ads with in-depth prompts reduces production cost and makes the process easy and faster. Tools used for this video are Flow by Google Labs,  Gemini, Sora 2, Wan 2.2 and ChatGPT.",
      videoUrl: "https://www.youtube.com/embed/kA9ENXO504U",
    },
    {
      title: "Cinematic Storytelling",
      description:
        "This silent short film goes beyond visuals, creating moments that move people and build connection. Every frame here was made to be felt.",
      videoUrl: "https://www.youtube.com/embed/phUPs8dtgHA",
    },
  ];

  const thumbnails = [
    "/assets/Thumbnail 1.jpg",
    "/assets/Thumbnail 2.jpg",
    "/assets/Thumbnail 3.jpg",
    "/assets/Thumbnail 4.jpg",
  ];

  const testimonials = [
    {
      name: "David Patterson",
      role: "Marketing Director",
      message:
        "Absolutely impressed with the editing skills! The transitions were seamless, and the storytelling was on point.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Arjun Mehta",
      role: "Content Strategist",
      message:
        "The best post-production work I've seen. Always delivers on time with stunning results.",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sarah Smith",
      role: "YouTube Creator",
      message:
        "This video editor transformed my raw footage into a cinematic masterpiece! Highly recommended.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="min-h-screen bg-gray-900 text-white relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-12">
          {/* Profile Image */}
          <img
            src="assets/profile-image.jpg"
            alt="Soumalya Saha"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-6"
          />

          {/* Name */}
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Soumalya Saha
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mt-4">
            Content Marketer and Editor
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">
            I craft stories that build communities, drive engagement, and scale
            brands through content and creativity.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative z-10 bg-gray-800 py-12 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Worked with</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Client 1 - Scaler School of Technology */}
          <a
            href="https://www.youtube.com/@ScalerSchoolOfTechnology"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition hover:bg-gray-600"
          >
            <img
              src="assets/scaler-logo.png"
              alt="Scaler School of Technology"
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-xl font-semibold text-white">
              Scaler School of Technology
            </p>
            <p className="text-gray-300 mt-2 text-sm">
              Scaler School of Technology is a transformative educational
              program focused on Computer Science Engineering.
            </p>
          </a>

          {/* Client 2 - Hrithik Mehlawat */}
          <a
            href="https://www.youtube.com/@HrithikMehlawat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition hover:bg-gray-600"
          >
            <img
              src="assets/hrithik-logo.png"
              alt="Hrithik Mehlawat"
              className="w-16 h-16 object-contain rounded-full mb-4"
            />
            <p className="text-xl font-semibold text-white">Hrithik Mehlawat</p>
            <p className="text-gray-300 mt-2 text-sm">
              Hrithik is the founder of Analyst Club, India's leading platform
              for Business Analyst education and upskilling.
            </p>
          </a>
        </div>
      </div>

      {/* Featured Works */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="space-y-24">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center md:flex-row gap-12 p-8 rounded-xl shadow-lg ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}`}
            >
              {/* Decorative Gradient Border */}
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl opacity-20"></div>

              {/* Video Container */}
              <div className="w-full md:w-1/2 flex justify-center relative z-10">
                <div className="w-[315px] h-[560px] overflow-hidden rounded-lg shadow-md border border-gray-700">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Thumbnail Designs
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {thumbnails.map((thumbnail, index) => (
              <SwiperSlide key={index}>
                <div className="relative group cursor-pointer">
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  );
}

export default App;
