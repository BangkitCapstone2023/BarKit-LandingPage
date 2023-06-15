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
    <div className="bg-tertiary-300" id="team">
      <div className="flex flex-wrap justify-center mb-10 text-center">
        <div className="w-full px-4 lg:w-6/12">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium mb-[18px]  text-primary-100 font-head">
            Ini Kami, BarKit Team
          </h1>
          <p className="text-sm font-body text-black-400">
            Dengan keahlian dan pengalaman yang luas, kami bekerja sebagai tim
            yang kuat untuk memberikan hasil luar biasa kepada klien kami. Kami
            bangga menyertakan anggota berbakat dari Bangkit 2023 yang membawa
            keterampilan terkini. Bersama, kami menciptakan lingkungan kerja
            dinamis, kolaboratif, dan kreatif.
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
              <OurTeamPart
                imageSrc="/thoriq.jpg"
                subHead="Muh Thoriq Ali Said"
                paragraph="Saya adalah seorang Cloud Engineer & Web Developer di tim BarKit serta menjadi anggota Cloud Computing Cohort di Bangkit 2023. Sebagai seorang Cloud Engineer, tugas saya adalah merancang, mengimplementasikan, dan mengelola lingkungan cloud yang aman dan skalabel untuk proyek tim BarKit. Sebagai seorang Web Developer, saya bertanggung jawab untuk mengembangkan aplikasi web yang responsif, fungsional, dan menarik bagi pengguna"
                role="Cloud Engineer & Web Developer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart
                imageSrc="/dian.jpg"
                subHead="Dian Ayu Rahmawati"
                paragraph="Saya adalah seorang UI/UX di tim BarKit dan juga merupakan Cloud Computing Cohort di Bangkit 2023. Sebagai UI/UX Designer, tugas utama saya adalah merancang antarmuka pengguna yang menarik dan intuitif untuk aplikasi kami. Saya bertanggung jawab untuk menciptakan pengalaman pengguna yang baik dengan menggabungkan desain yang estetis dan fungsionalitas yang optimal"
                role="UI/UX"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart
                imageSrc="/robby.jpg"
                subHead="Robby Alamsyah"
                paragraph="Saya adalah seorang Mobile Developer di tim BarKit dan juga merupakan Mobile Developer Cohort di Bangkit 2023. Sebagai Mobile Developer, tugas utama saya adalah merancang dan mengembangkan aplikasi mobile yang responsif dan fungsional. Saya bertanggung jawab untuk menciptakan pengalaman pengguna yang baik dengan antarmuka yang menarik dan performa yang optimal"
                role="Mobile Developer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart
                imageSrc="/awang.jpg"
                subHead="Awang Mulya Nugrawan"
                paragraph="Saya adalah seorang Machine Learning Engineer di tim BarKit dan juga merupakan anggota Machine Learning Cohort di Bangkit. Sebagai Machine Learning Engineer, tugas utama saya adalah merancang, mengembangkan, dan menerapkan model machine learning untuk memecahkan masalah dan mengambil wawasan berharga dari data. Saya bertanggung jawab untuk melakukan pra-pemrosesan data, memilih dan melatih model yang tepat, serta mengevaluasi kinerjanya"
                role="Machine Learning Engineer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart
                imageSrc="/illa.jpg"
                subHead="Andi Illa Erviani Nensi"
                paragraph="Saya adalah seorang Machine Learning Engineer di tim BarKit dan juga merupakan anggota Machine Learning Cohort di Bangkit. Sebagai Machine Learning Engineer, tugas utama saya adalah merancang, mengembangkan, dan menerapkan model machine learning untuk memecahkan masalah dan mengambil wawasan berharga dari data. Saya bertanggung jawab untuk melakukan pra-pemrosesan data, memilih dan melatih model yang tepat, serta mengevaluasi kinerjanya"
                role="Machine Learning Engineer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <OurTeamPart
                imageSrc="/naufal.jpg"
                subHead="Naufal Mahardika Putra"
                paragraph="Saya adalah seorang Machine Learning Engineer di tim BarKit dan juga merupakan anggota Machine Learning Cohort di Bangkit. Sebagai Machine Learning Engineer, tugas utama saya adalah merancang, mengembangkan, dan menerapkan model machine learning untuk memecahkan masalah dan mengambil wawasan berharga dari data. Saya bertanggung jawab untuk melakukan pra-pemrosesan data, memilih dan melatih model yang tepat, serta mengevaluasi kinerjanya"
                role="Machine Learning Engineer"
              />
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
