import logoImg from "@/assets/final32-D0XcQR5p.png";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Why Us", href: "/why-us" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/career" },
];

const dropdownLinks = [
  { label: "Executive Summary", href: "/executive-summary" },
  { label: "The Problem", href: "/the-problem" },
  { label: "Training", href: "/training" },
  { label: "Social Impact", href: "/social-impact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return (saved as "light" | "dark") || "light";
  });
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass-nav shadow-soft" : "glass-nav"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link to="/" className="focus-ring flex shrink-0 items-center rounded-xl">
          <img
            src={logoImg}
            alt="Labor Connect Solutions Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-18 sm:h-20 lg:h-22" : "h-20 sm:h-24 lg:h-26"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {mainLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setDropdownOpen(false)}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cta/10 text-cta"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              onClick={() => setDropdownOpen((value) => !value)}
              aria-expanded={dropdownOpen}
              aria-label="Toggle more links"
              className="focus-ring flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              More <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="surface-glass absolute right-0 top-full mt-1 w-56 rounded-lg p-2 shadow-lift"
                >
                  {dropdownLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`focus-ring flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          isActive
                            ? "bg-cta/10 text-cta"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="focus-ring hidden btn-cta rounded-lg px-4 py-2 text-sm font-semibold lg:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            onClick={toggleTheme}
            className="focus-ring flex items-center gap-1 rounded-full border border-border bg-secondary/90 p-1.5 transition-all duration-300 hover:border-cta hover:bg-cta/10"
            aria-label="Toggle theme"
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                theme === "light" ? "bg-cta text-cta-foreground shadow-md" : "text-muted-foreground"
              }`}
            >
              <Sun className="h-4 w-4" />
            </span>
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-cta text-cta-foreground shadow-md" : "text-muted-foreground"
              }`}
            >
              <Moon className="h-4 w-4" />
            </span>
          </button>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="focus-ring rounded-md p-2 text-foreground xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/70 bg-background/95 xl:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {[...mainLinks, ...dropdownLinks].map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`focus-ring rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-cta/10 text-cta"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
