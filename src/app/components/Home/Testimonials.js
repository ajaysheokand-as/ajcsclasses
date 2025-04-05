"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Aman Sharma",
    feedback:
      "The AJCSClasses MERN course helped me land my first internship. The projects were amazing and the support was top-notch!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    feedback:
      "I learned more in 3 months here than in 3 years of college. The practical approach makes all the difference!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Kumar",
    feedback:
      "The mentor is highly experienced and explains concepts in a very simple way. Highly recommend AJCSClasses!",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Kritika Mehta",
    feedback:
      "AJCSClasses transformed my career. From zero knowledge to building full-stack apps!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mohit Verma",
    feedback:
      "Amazing mentor and real-time guidance. I highly recommend this platform!",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-10">
          What Our Students Say
        </h2>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#F5F7FA] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 relative">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
                  <h4 className="font-semibold text-[#1D3E50]">{t.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="swiper-button-prev cursor-pointer text-[#1D3E50] text-xl"></div>
            <div className="swiper-button-next cursor-pointer text-[#1D3E50] text-xl"></div>
          </div>
          <div className="custom-pagination flex justify-center mt-4 space-x-3" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
