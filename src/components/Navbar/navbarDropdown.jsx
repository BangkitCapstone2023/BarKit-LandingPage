export default function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col items-center gap-8 text-black-200">
          <a className="w-fit" href="#">
            <p className="navlink active-navlink">Home</p>
          </a>
          <a className="w-fit" href="#feature">
            <p className="navlink">Feature</p>
          </a>
          <a className="w-fit" href="#partner">
            <p className="navlink">Partner</p>
          </a>
          <a className="w-fit" href="#team">
            <p className="navlink">Team</p>
          </a>
          <a className="w-fit" href="#footer">
            <p className="navlink">Social</p>
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <a href="#">
            <button className="py-3.5 border border-primary-100 w-full text-white bg-primary-100 font-medium">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
