import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Inner_nav({children,width="fit-content"}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
        slideControls.start("hidden");
    } else {
        slideControls.start("visibilty");
    }
  }, [inView, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      {children}
      <motion.div
        variants={{
          hidden: { left: '100%' },
          visibilty: { left: 0 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.8 ,ease:'easeIn' }}
        style={{
            position:'absolute',
            top:-4,
            bottom:-4,
            left:0,
            right:0,
            background:'#fff',
            zIndex:20,
        }}
      />
    </div>
  );
}
