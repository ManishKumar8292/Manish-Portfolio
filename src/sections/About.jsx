import { motion } from "framer-motion";
import profile from "../assets/boy.jpeg";

const About = () => {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] ",
  ];

  const stats = [
    { label: "Experience", value: "2 Years" },
    { label: "Specialization", value: "Frontend Development" },
    { label: "Focus", value: "Performance & UI/UX" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex justify-center items-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((glow, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glow}`}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img
              src={profile}
              alt="Manish Kumar"
              className="absolute inset-0"
            />
          </motion.div>
          <div className="flex flex-1 justify-center flex-col text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] ">
              Manish Kumar
            </h2>
            <p className="mt-2 text-lg md:text-xl text-white/90 font-semibold">
              UI Developer
            </p>
            <p className="mt-2 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build modern, scalable web applications with a focus on clean
              architecture, intuitive UI, and performance. Skilled in HTML5,
              CSS3, SCSS, Bootstrap, Tailwind CSS, JavaScript, and React.js, I
              enjoy turning ideas into responsive, user-friendly digital
              experiences with clean, maintainable code.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4  md:max-w-3xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                className="inline-flex justify-center items-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
                href="#projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-3 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About me
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a Software Developer who enjoys turning ideas into fast,
            scalable, and resilient web applications with clean code, modern
            technologies, and seamless user experiences.
          </p>
          <p className="mt-3 text-gray-400 text-base sm:text-lg">
            I love turning ideas into scalable, user-friendly digital products
            that make a meaningful impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
