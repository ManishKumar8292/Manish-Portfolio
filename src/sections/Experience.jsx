import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";

const experiences = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    duration: "Jul 2025 – Present",
    description:
      "Building responsive React applications and modern websites for clients.",
  },
  {
    role: "Software Engineer",
    company: "Indegene Limited",
    duration: "Apr 2025 – Jun 2025",
    description:
      "Developed responsive healthcare web applications using Drupal and modern frontend technologies.",
  },
  {
    role: "UI Developer",
    company: "HealthSignz Technologies Pvt. Ltd.",
    duration: "Jul 2022 – Feb 2024",
    description:
      "Built scalable React applications, reusable UI components, and integrated REST APIs.",
  },
];

const ExperienceItem = ({ exp, idx, start, end, scrollYProgress, layout }) => {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0],
  );
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);
  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        >
          <motion.div
            className={`absolute left-1/2 -translate-x-1/2 w-[3px] bg-white/40 ${idx % 2 === 0 ? "-top-10" : "top-7"}`}
            style={{ height: 40, opacity }}
          ></motion.div>
          <motion.article
            className={`absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? "bottom-14" : "top-14"} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[360px]`}
            style={{ opacity, y, maxWidth: "90vw" }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-md text-gray-400 mb-2">
              {exp.company} | {exp.duration}
            </p>
            <p className="text-md text-gray-300 break-words">
              {exp.description}
            </p>
          </motion.article>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-[30px] top-1/3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      ></motion.div>
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold break-words">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">
          {" "}
          {exp.company} | {exp.duration}{" "}
        </p>
        <p className="text-sm text-gray-300 break-words">{exp.description}</p>
      </motion.article>
    </div>
  );
};
const Experience = () => {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });
  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    [],
  );
  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <section id="experience" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            {" "}
            Experience{" "}
          </h2>
          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-1.5 bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-1.5 bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}
            {isMobile && (
              <div className="relative w-full max-w-md overflow-hidden">
                <div className="absolute left-0 top-0 bottom-10 w-1.5 bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-1.5 bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  ></motion.div>{" "}
                </div>{" "}
                <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                  {" "}
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}{" "}
                </div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
