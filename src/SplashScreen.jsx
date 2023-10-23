import React from "react";
import "./SplashScreen.css";
import { motion, AnimatePresence } from "framer-motion";

function SplashScreen() {
  return (
    <AnimatePresence>
      <motion.div
        inlist={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="splash-screen"
      >
        <h1 className="splash-screen-title font-black animate-pulse">
          Todo app
        </h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default SplashScreen;
