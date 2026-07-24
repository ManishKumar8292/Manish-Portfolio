import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 },
    );
    if (homeSection) observer.observe(homeSection);
    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);

        if (timerId.current) clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [forceVisible]);

  return (
    <>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuopen(false)} />
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center gap-1">
          <img
            src={Logo}
            alt="Manish Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="text-xl font-bold text-white hidden sm:block">
            Manish
          </div>
        </div>

        <div className="flex space-x-1 items-center ">
          <button
            onClick={() => setMenuopen(true)}
            className="text-3xl focus:outline-none text-white"
            aria-label="open menu"
          >
            <FiMenu />
          </button>
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-3 py-2 font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              Reach Out
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
