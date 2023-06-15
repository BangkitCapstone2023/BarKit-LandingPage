import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import OurTeamPart from './ourTeamPart';

export default function OurTeam() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-tertiary-300">
      <div className="flex flex-wrap justify-center mb-10 text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium mb-[18px]  text-primary-100 font-head">
            Our Incredible Team
          </h1>
          <p className="text-sm font-body text-black-400">
            Bringing together a wealth of expertise spanning over a century, our
            team is a force to be reckoned with. As an addition, we proudly
            include the talented individuals from Bangkit 2023, who bring fresh
            perspectives and cutting-edge skills to our dynamic team.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-[1344px]">
        <div className="px-5 pt-10 pb-[52px] sm:px-10">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="relative"
          >
            <SwiperSlide>
              <OurTeamPart />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart />
            </SwiperSlide>
            <div className="absolute bottom-0 right-0 z-10 flex items-center gap-6 sm:right-10">
              <button
                className="testimonial-button prev"
                ref={navigationPrevRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-left.svg"
                  alt="arrow"
                />
              </button>
              <button
                className="testimonial-button next"
                ref={navigationNextRef}
              >
                <img
                  className="w-2 h-4.5 object-cover"
                  src="/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
