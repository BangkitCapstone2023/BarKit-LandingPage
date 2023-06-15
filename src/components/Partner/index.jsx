import React from 'react';

const Partner = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[80vh] pb-16 font-sans bg-tertiary-300"
      id="partner"
    >
      <div className="container mx-auto ">
        <div className="justify-center w-11/12 mx-auto mb-16 text-center xl:w-2/3 lg:w-2/3 md:w-2/3 sm:mb-10">
          <h1
            tabIndex="0"
            className="mb-5 text-center text-primary-100 font-head font-medium text-[2rem] md:text-[2.5rem] lg:text-[50px] font-mediumfocus:outline-none"
          >
            Di Dukung Oleh
          </h1>
          <p className="text-sm font-body text-black-400">
            Aplikasi kami di dukung oleh perusahaan dan program ternama, Selain
            itu, program yang kami ikuti memberikan kami akses ke pengetahuan
            terkini, pelatihan intensif, dan mentorship dari para ahli di
            bidangnya. Dengan dukungan ini, kami dapat terus memperbaiki
            aplikasi kami, memberikan pengalaman yang luar biasa kepada pengguna
          </p>
        </div>
        <div className="flex flex-wrap justify-center px-4 xl:py-16 lg:py-16 md:py-16 sm:py-16 md:px-6 lg:px-10 xl:px-0">
          <div className="flex items-center justify-center w-full pb-16 border-gray-200 sm:w-1/2 lg:w-1/4 xl:border-b lg:border-b xl:border-r lg:border-r xl:pb-10">
            <img
              tabIndex="0"
              className="focus:outline-none max-h-[200px] max-w-[200px]"
              src="/google-logo.webp"
              alt="Google logo"
              role="img"
            />
          </div>
          <div className="flex items-center justify-center w-full pb-16 border-gray-200 sm:w-1/2 lg:w-1/4 xl:border-b lg:border-b xl:border-r lg:border-r xl:pb-10">
            <img
              tabIndex="0"
              className="focus:outline-none max-h-[200px] max-w-[200px]"
              src="/km.webp"
              alt="Kampus Merdeka"
              role="img"
            />
          </div>
          <div className="flex items-center justify-center w-full pt-4 pb-16 border-gray-200 sm:w-1/2 lg:w-1/4 xl:border-b lg:border-b xl:pb-10">
            <img
              tabIndex="0"
              className="focus:outline-none max-h-[200px] max-w-[200px]"
              src="/logo-bangkit.webp"
              alt="Bangkit Logo"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
