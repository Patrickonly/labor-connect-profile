import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1 },
};

const revealVariants: Record<"fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn", Variants> = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
};

export function Reveal({
  children,
  delay = 0,
  className,
  type = "fadeUp",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: keyof typeof revealVariants;
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants[type]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  eyebrow?: string; // kept for API compatibility — no longer rendered
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-8 max-w-2xl text-center"
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-pretty text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
