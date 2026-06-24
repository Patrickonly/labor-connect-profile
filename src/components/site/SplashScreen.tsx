import { motion } from "framer-motion";
import { Users2 } from "lucide-react";

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cta shadow-lg"
      >
        <Users2 className="h-10 w-10 text-cta-foreground" />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-6 text-2xl font-extrabold text-primary-foreground sm:text-3xl"
      >
        Labor Connect Solutions Ltd
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-2 text-sm text-primary-foreground/70"
      >
        Trusted Workforce Solutions in Rwanda
      </motion.p>
      <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-primary-foreground/15">
        <motion.div
          className="h-full rounded-full bg-cta"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}