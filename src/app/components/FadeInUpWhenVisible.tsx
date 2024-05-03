// components/FadeInUpWhenVisible.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
}

const FadeInUp = ({ children }: FadeInUpProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
