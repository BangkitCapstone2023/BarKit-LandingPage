import React from 'react';
import { motion } from 'framer-motion';

const PopUp = ({ showPopup, handleExitClick }) => {
  return (
    <>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          style={{ zIndex: 9999 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="relative p-8 bg-white rounded-lg"
          >
            <h3 className="mb-4 text-2xl text-center font-head">
              Coming Soon!
            </h3>
            <p className="mb-6 text-lg text-center font-body">
              We are working hard to bring you the best experience. <br /> The
              app will be available soon on the App Store and Play Store.
            </p>
            <button
              className="block px-4 py-2 mx-auto text-white rounded-lg bg-primary-100 font-body"
              onClick={handleExitClick}
            >
              Exit
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PopUp;
