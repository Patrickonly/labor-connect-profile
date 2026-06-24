import heroImg from "@/assets/hero-workforce.jpg";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  TrendingUp,
  Twitter,
  Users
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-20 text-foreground sm:pt-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              <BriefcaseBusiness className="h-3.5 w-3.5 text-cta" /> Workforce Solutions • Rwanda
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Labor <span className="text-cta">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              Trusted workforce solutions connecting businesses with skilled, trained workers in Rwanda and beyond.
            </motion.p>
            
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, label: "500+ Trained Workers" },
                { icon: ShieldCheck, label: "Verified & Trusted" },
                { icon: TrendingUp, label: "Fast Deployment" },
                { icon: BriefcaseBusiness, label: "9+ Industries" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
                  <feature.icon className="h-5 w-5 text-cta" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="btn-cta inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary hover:border-cta hover:text-cta transition-all"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex gap-3"
            >
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-cta hover:text-cta hover:bg-cta/10 transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="Professional trained workforce"
                className="h-80 w-full sm:h-96 sm:w-full lg:h-[420px] rounded-2xl object-cover border-4 border-border shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
