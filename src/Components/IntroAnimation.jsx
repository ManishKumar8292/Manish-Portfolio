import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onFinish }) => {
  const greeting = useMemo(
    () => [
      "Hello",
      "Salam",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "Здравствуйте",
      "Merhaba",
      "Γειά",
      "Hej",
      "Hallo",
      "नमस्ते",
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greeting.length - 1) {
      const id = setInterval(() => setIndex((i) => i + 1), 100);
      return () => clearInterval(id);
    } else {
      const time = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(time);
    }
  }, [index, greeting.length]);
  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl fonr-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greeting[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
