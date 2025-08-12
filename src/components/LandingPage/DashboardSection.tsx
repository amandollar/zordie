import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function DashboardSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Detect scroll position relative to the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Scale from smaller to larger
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <div className="-mt-[20vh] z-50">
      <motion.div
        ref={ref}
        style={{ scale: smoothScale }}
        className="mx-auto max-w-[80%] p-[3px] rounded-3xl bg-gradient-to-tr from-pink-300 via-purple-200 to-indigo-300"
      >
        <div className="rounded-3xl bg-white overflow-hidden shadow-xl">
          <div className="aspect-video">
            <img
              src="/landingPage/dashbaordScreenshot.png"
              alt="Dashboard preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
