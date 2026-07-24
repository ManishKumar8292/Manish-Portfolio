import Rajath from "../assets/Rajath.jpeg";
import Dhanashri from "../assets/dhanshri.jpeg";
import Madhu from "../assets/madhu.png";
import NandKishor from "../assets/nandkishore.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajath R Patil",
    role: "Frontend Developer at HealthSignz Technologies Pvt. Ltd.",
    review:
      "Manish is a talented UI developer with strong UI/UX skills. He consistently delivers responsive, user-friendly interfaces and is always willing to collaborate to find the best solution.",
    image: Rajath,
  },
  {
    name: "Dhanashri K",
    role: "UI Developer at HealthSignz Technologies Pvt. Ltd.",
    review:
      "Working with Manish was a great experience. His attention to detail and ability to transform designs into pixel-perfect, responsive interfaces made our projects successful.",
    image: Dhanashri,
  },
  {
    name: "Madhusmita Behara",
    role: "Team Leader at HealthSignz Technologies Pvt. Ltd.",
    review:
      "Manish is dedicated, dependable, and always focused on delivering quality work. His problem-solving skills and commitment helped our team complete projects efficiently.",
    image: Madhu,
  },
  {
    name: "Nandkishor",
    role: "Software Engineer at Indegene Limited",
    review:
      "Manish has excellent knowledge of modern frontend technologies. He writes clean, maintainable code, adapts quickly to new challenges, and is a great team player.",
    image: NandKishor,
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name + 1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />

            <p className="text-gray-200 italic mb-4">
              <span className="text-xl  font-serif leading-none mr-1">❝</span>
              {t.review}

              <span className="text-xl  font-serif leading-none ml-1">❞</span>
            </p>

            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
