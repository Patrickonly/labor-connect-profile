import logoImg from "@/assets/final32-D0XcQR5p.png";
import { motion } from "framer-motion";

const dots = [0, 1, 2];

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.78, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <img
          src={logoImg}
          alt="Labor Connect Solutions"
          className="h-52 w-auto object-contain sm:h-64 lg:h-72"
        />
      </motion.div>

      {/* Loader block — tightly under logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 flex flex-col items-center gap-3"
      >
        {/* 3 orange dots */}
        <div className="flex items-center gap-3">
          {dots.map((i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.18, 1],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 1.0,
                repeat: Infinity,
                delay: i * 0.18,
                ease: [0.42, 0, 0.58, 1],
              }}
              style={{
                display: "inline-block",
                width: "0.875rem",
                height: "0.875rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #fb923c, #ea580c)",
                boxShadow: "0 0 14px 3px rgba(249,115,22,0.55)",
              }}
            />
          ))}
        </div>

        {/* Label */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Loading · Wait to access website
        </p>
      </motion.div>
    </motion.div>
  );
}
