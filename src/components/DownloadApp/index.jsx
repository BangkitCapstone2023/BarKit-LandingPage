import React, { useState } from 'react';
import PopUp from '../PopUp'; // Import the Popup component

const DownloadAppSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClick = () => {
    setShowPopup(true);
  };

  const handleExitClick = () => {
    setShowPopup(false);
  };

  return (
    <div id="download-app" className="bg-tertiary-300">
      <div className="container flex flex-col items-center px-6 pt-24 mx-auto md:flex-row">
        <div className="flex flex-col justify-center w-full overflow-y-hidden md:w-1/2">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium text-primary-100 font-head leading-[1.2]">
            Unduh sekarang di App Store dan Play Store.
          </h2>
          <p className="mt-6 text-base text-[2rem] leading-normal text-centermd:text-[2.5rem] lg:text-[1.25rem] md:text-left animate-slide-in-bottom-subtitle font-body text-black-300 ">
            Ngapin Beli Kalo Bisa Di Sewa?
          </p>
          <p className="mb-6 text-base text-[2rem] leading-normal text-centermd:text-[1.25rem] lg:text-[1.25rem] md:text-left animate-slide-in-bottom-subtitle font-body text-black-300 ">
            #SewaAjaDulu
          </p>
          <div className="flex justify-center w-full md:justify-start animate-fade-in">
            <img
              src="icon-ios.webp"
              className="h-12 pr-4"
              alt="App Store"
              onClick={handlePopupClick} // Show popup on App Store image click
            />
            <img
              src="icon-gplay.webp"
              className="h-12"
              alt="Play Store"
              onClick={handlePopupClick} // Show popup on Play Store image click
            />
          </div>
        </div>
        <div className="w-full pt-6 overflow-y-hidden md:w-1/2">
          <img
            className="w-5/6 mx-auto lg:mr-0 animate-slide-in-bottom"
            src="/download-img.png"
            alt="Devices"
          />
        </div>
      </div>
      <PopUp showPopup={showPopup} handleExitClick={handleExitClick} />{' '}
      {/* Use the Popup component */}
    </div>
  );
};

export default DownloadAppSection;
