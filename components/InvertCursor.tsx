"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvertCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsTouch(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    }

    const handleMove = (e: MouseEvent) => {
      if (!mediaQuery.matches) return;
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      }
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none rounded-full bg-secondary w-15 h-15 z-9999"
          style={{ mixBlendMode: "difference" }}
          animate={{ x: pos.x - 16, y: pos.y - 16, opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 0.4,
          }}
        />
      )}
    </AnimatePresence>
  );
}
