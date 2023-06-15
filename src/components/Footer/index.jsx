export default function Footer() {
  return (
    <div className="bg-primary-300" id="footer">
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px] ">
        <div className="flex flex-col grid-cols-3 px-5 py-10 sm:px-10 lg:grid lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="main-logo.png"
              alt="BarKit-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Features</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#footer">
                  Find a Patner
                </a>
                <a className="footer-link" href="#footer">
                  Become a Patner
                </a>
                <a className="footer-link" href="#footer">
                  Affiliates
                </a>
                <a className="footer-link" href="#footer">
                  Patner Offers
                </a>
                <a className="footer-link" href="#footer">
                  Store Examples
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Company</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#footer">
                  Leaders
                </a>
                <a className="footer-link" href="#footer">
                  About Us
                </a>
                <a className="footer-link" href="#footer">
                  Careers
                </a>
                <a className="footer-link" href="#footer">
                  Press
                </a>
                <a className="footer-link" href="#footer">
                  Awards
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#footer">
                  Overview
                </a>
                <a className="footer-link" href="#footer">
                  Articles
                </a>
                <a className="footer-link" href="#footer">
                  Webinars
                </a>
                <a className="footer-link" href="#footer">
                  Events
                </a>
                <a className="footer-link" href="#footer">
                  Ecommerce
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 text-lg font-medium text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-sm text-white/70">
                <a className="footer-link" href="#footer">
                  BarKit Company
                </a>
                <a className="footer-link" href="#footer">
                  Knowledge Base
                </a>
                <a className="footer-link" href="#footer">
                  Videos Contact
                </a>
                <a className="footer-link" href="#footer">
                  Tech Support
                </a>
                <a className="footer-link" href="#footer">
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
              <a href="https://github.com/BangkitCapstone2023" target="_blank">
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
              © 2023 by{' '}
              <a
                className="italic underline"
                href="https://github.com/BangkitCapstone2023"
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
