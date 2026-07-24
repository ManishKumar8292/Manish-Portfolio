import { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import avator from "../assets/avator.png";

const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-kumar-bb579a192",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "https://github.com/ManishKumar8292",
  },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918651643009" },
  { Icon: SiGmail, label: "Gmail", href: "mailto:manishverma9122@gmail.com" },
  { Icon: IoIosCall, label: "Call", href: "tel:+918651643009" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.3,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

const Home = () => {
  const roles = useMemo(
    () => ["Software Developer", "UI Developer", "Frontend Developer"],
    [],
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, roles, deleting]);

  return (
    <section
      className="w-full h-screen relative bg-black  overflow-hidden pt-6"
      id="home"
    >
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vw] md:h-[40vh] max-w-125 max-h-125 rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-20 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vh] sm:h-[50vw] md:h-[40vh] max-w-125 max-h-125 rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-20 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full h-full max-w-7xl z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:ps-24 mx-auto max-w-160">
            <motion.div
              className="mb-2 lg:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em] pointer-events-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="inline-block w-[2px] ms-1 bg-white animate-pulse align-middle h-[1em]"></span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg pointer-events-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />{" "}
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Manish Kumar
              </span>
            </motion.h1>
            <motion.p
              className="mt-3 text-base sm:text-lg md:text-xl  text-gray-200 max-w-2xl mx-auto lg:mx-0 pointer-events-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I transform complex ideas into modern, scalable, and
              high-performance web applications, creating seamless user
              experiences that are fast, intuitive, and built to make an impact.
            </motion.p>
            <motion.div
              className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium text-lg text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            <div className="mt-4 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => {
                return (
                  <motion.a
                    href={href}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="absolute inset-0 flex items-center justify-end"
            style={{
              right: "10px",
              width: "min(22vw,410px)",
              height: "min(40vh,760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic gradient(from 0deg,#1cd8d2,#00bf8f,#302b63,#1cd8d2)",
            }}
          />
          <motion.img
            src={avator}
            alt="Manish Kumar"
            className="absolute top-1/2 -translate-y-1/2 object-content select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(40vw,780px)",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
