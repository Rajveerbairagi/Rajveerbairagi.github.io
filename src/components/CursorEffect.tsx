import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    // Disable cursor effects on mobile/tablet
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add trail (reduced for performance)
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails((prev) => [...prev.slice(-6), newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div className="w-5 h-5 rounded-full bg-primary blur-sm opacity-70" />
      </motion.div>

      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] w-2 h-2 rounded-full"
          initial={{
            x: trail.x - 4,
            y: trail.y - 4,
            opacity: 1,
            scale: 1,
            background: `hsl(${200 + index * 10} 100% ${50 + index * 5}%)`,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
