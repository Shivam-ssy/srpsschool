import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Initially set to false for mobile menu
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main
        className={`fixed top-0 left-0 w-full p-4 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900 text-white' : 'md:bg-transparent bg-gray-900 text-white md:text-black'
        }`}
      >
        <div className="w-full hidden h-5 md:flex justify-between px-10">
          <div className="flex gap-5">
            <div className="flex gap-1">
              <i className="ri-time-fill text-primary"></i> 8.00am-4.00pm
            </div>
            <div className="flex gap-1">
              <i className="ri-mail-fill text-primary"></i> support@kindelo.com
            </div>
          </div>
          <div className="flex gap-1 ">
            <i className="ri-map-pin-2-fill text-primary"></i> 14/A,Kilix Home Tower, NYC
          </div>
        </div>
        <nav className="flex justify-between items-center md:justify-around mt-5">
          <div>
            <div className="flex items-center text-secondary gap-3 font-serif">
              <img className="h-20" src="/logo.png" alt="" />
              <div>
                <h3 className="text-2xl font-bold">kindedo</h3>
                <span>Best School</span>
              </div>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block h-screen md:h-auto absolute bg-gray-900 md:bg-transparent text-white md:text-inherit top-32 md:top-auto md:relative md:m-auto right-0 min-w-72 md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row px-5 py-5 gap-5">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? `text-primary` : `hover:text-primary`)}
              >
                <li className="cursor-pointer">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? `text-primary` : `hover:text-primary`)}
              >
                <li className="cursor-pointer">About</li>
              </NavLink>
              <div className="relative group">
                <Link to="/program">
                  <li
                    className={`cursor-pointer hover:text-primary ${
                      location.pathname.includes("program") ? "text-primary" : ""
                    }`}
                  >
                    Programs
                  </li>
                </Link>
              </div>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? `text-primary` : `hover:text-primary`)}
              >
                <li className="cursor-pointer">Classes</li>
              </NavLink>
              <div className="relative group">
                <li
                  className={`cursor-pointer hover:text-primary ${
                    location.pathname.includes("pages") ? "text-primary" : ""
                  }`}
                >
                  Pages
                </li>
                <div className="hidden relative md:absolute bg-secondary w-40 py-5 group-hover:block">
                  <Link to="/pages/teacher">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      Teachers
                    </div>
                  </Link>
                  <Link to="/pages/teachersdetails">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      Teachers Details
                    </div>
                  </Link>
                  <Link to="pages/timetable">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      Time Table
                    </div>
                  </Link>
                  <Link to="/pages/faqs">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      FAQs
                    </div>
                  </Link>
                  <Link to="/pages/gallery">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      Gallery
                    </div>
                  </Link>
                  <Link to="/pages/testimonials">
                    <div className="w-full py-2 px-2 hover:bg-gray-900 hover:text-white break-keep">
                      Testimonials
                    </div>
                  </Link>
                </div>
              </div>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? `text-primary` : `hover:text-primary`)}
              >
                <li className="cursor-pointer">News</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? `text-primary` : `hover:text-primary`)}
              >
                <li className="cursor-pointer">Contact</li>
              </NavLink>
              <li className="cursor-pointer">
                <i className="ri-search-line"></i>
              </li>
            </ul>
          </div>
          <div className="md:flex hidden gap-5 items-center">
            <div className="flex items-center gap-2">
              <i className="ri-phone-line text-2xl "></i> 907-200-3462
            </div>
            <div className="px-5 py-3 bg-primary rounded-3xl">Apply Now</div>
            <div>
              <i className="ri-dashboard-line text-secondary text-3xl"></i>
            </div>
          </div>
          <div className="block md:hidden">
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <i className="text-3xl ri-close-large-line"></i>
              ) : (
                <i className="ri-menu-line text-3xl"></i>
              )}
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}

export default NavBar;
