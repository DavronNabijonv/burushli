import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Card({ children, classNameCard }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [inView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        className={classNameCard}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
