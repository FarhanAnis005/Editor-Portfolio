import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
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
      videoUrl: "https://www.youtube.com/embed/Mun3GgxDpA0",
    },
    {
      title: "Motion Graphics",
      description:
        "Best storytelling videos are created through best motion graphics. Crafted animations push views to a huge extent without having to break the bank for a studio and cast",
      videoUrl: "https://www.youtube.com/embed/uW7WBpFn5-c",
    },
    {
      title: "Personal Branding",
      description:
        "Creating digital footprints for any specialists in any niche has become highly important in today’s world. This increases leads and clients for those particular businesses like Doctors / Real Estate Agents / Advocates / Dancers etc",
      videoUrl: "https://www.youtube.com/embed/SmntlYlALsI",
    },
    {
      title: "AI Avatar Videos",
      description:
        "AI avatar videos reduce time for shooting and thus makes the video creation process easy and hassle free for the creator. Tools like Heygen helps busy entrepreneurs create content but require some touchups to keep audence hooked!",
      videoUrl: "https://www.youtube.com/embed/DJInvFUH0aM",
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
          <source src="assets\background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-12">
          {/* Profile Image */}
          <img
            src="assets\Profile Pic.jpeg"
            alt="Soumalya Saha"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-6"
          />

          {/* Name */}
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Soumalya Saha
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 mt-4">
            Professional Video Editor
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">
            Crafting compelling visual stories and bringing ideas to life
            through the art of video editing.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative z-10 bg-gray-800 py-12 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Edited For</h2>

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

      {/* Testimonials Section */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Clients Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="max-w-3xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg text-gray-300 italic max-w-xl">
                  "{testimonial.message}"
                </p>
                <h3 className="text-xl font-semibold mt-4 text-white">
                  {testimonial.name}
                </h3>
                <span className="text-gray-400 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <p>sousaha341@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <p>+91 98305 33421</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <p>Kolkata, India</p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/_soumalyaa"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@soumalyasaha7925"
                  className="text-gray-400 hover:text-white"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                Send me a WhatsApp Message
              </h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    value={whatsappForm.message}
                    onChange={(e) =>
                      setWhatsappForm({
                        ...whatsappForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Hi! I'm interested in your video editing services..."
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send WhatsApp Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
