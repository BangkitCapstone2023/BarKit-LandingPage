import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* Contact */}
      <div className="relative overflow-hidden border-b border-white/15">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="flex flex-col items-center px-5 py-10 text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              We can take care of the installation
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Don’t want to deal with technical stuff? Let us fire up Uvodo for
              you, so you can spend your time selling right away.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-300 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </MainButton>
          </motion.section>
        </div>

      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="flex flex-col grid-cols-3 px-5 py-10 sm:px-10 lg:grid lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="main-logo.png"
              alt="Barkit-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Features</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#">
                  Find a Patner
                </a>
                <a className="footer-link" href="#">
                  Become a Patner
                </a>
                <a className="footer-link" href="#">
                  Affiliates
                </a>
                <a className="footer-link" href="#">
                  Patner Offers
                </a>
                <a className="footer-link" href="#">
                  Store Examples
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Company</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#">
                  Leaders
                </a>
                <a className="footer-link" href="#">
                  About Us
                </a>
                <a className="footer-link" href="#">
                  Careers
                </a>
                <a className="footer-link" href="#">
                  Press
                </a>
                <a className="footer-link" href="#">
                  Awards
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#">
                  Overview
                </a>
                <a className="footer-link" href="#">
                  Articles
                </a>
                <a className="footer-link" href="#">
                  Webinars
                </a>
                <a className="footer-link" href="#">
                  Events
                </a>
                <a className="footer-link" href="#">
                  Ecommerce
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#">
                  Barkit Company
                </a>
                <a className="footer-link" href="#">
                  Knowledge Base
                </a>
                <a className="footer-link" href="#">
                  Videos Contact
                </a>
                <a className="footer-link" href="#">
                  Tech Support
                </a>
                <a className="footer-link" href="#">
                  API Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="items-center justify-between text-center lg:col-span-3 md:flex">
            <div className="flex items-center justify-center order-2 gap-4 mb-4">
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a href="" target="_blank">
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="order-1 font-medium text-white font-body">
              © 2023 by{" "}
              <a
                className="italic underline"
                href=""
                target="_blank"
              >
                BarKit Indonesia
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
