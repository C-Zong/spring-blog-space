'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full toolbar
        cursor-pointer transition-all duration-[var(--anim-duration)] ease-in-out"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className="w-5 h-5 text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className="w-5 h-5 text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
