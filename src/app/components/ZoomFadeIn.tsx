
// components/ZoomFadeIn.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ZoomFadeInProps {
  children: ReactNode;
}

const ZoomFadeIn = ({ children }: ZoomFadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Element is considered in view when 10% is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }} // Start with lower opacity and scaled down
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.5
      }} // Animate to full opacity and scale up when in view
      transition={{ duration: 0.5 }} // Set the duration of the animation
    >
      {children}
    </motion.div>
  );
};

export default ZoomFadeIn;
