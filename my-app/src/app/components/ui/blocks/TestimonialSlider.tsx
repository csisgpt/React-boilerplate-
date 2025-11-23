import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export interface Testimonial {
  quote: string;
  name: string;
}

export interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials, className }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className={clsx('relative border border-neutral rounded-md', className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center p-6 bg-base-soft rounded shadow"
        >
          <p className="mb-2 ">"{testimonials[index].quote}"</p>
          <p className="font-semibold ">- {testimonials[index].name}</p>
        </motion.div>
      </AnimatePresence>
      {testimonials.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button onClick={prev} aria-label="Previous" className="p-1">◀</button>
          <button onClick={next} aria-label="Next" className="p-1">▶</button>
        </div>
      )}
    </div>
  );
};
