import { motion } from 'framer-motion';

/**
 * Envuelve contenido con la animación de aparición al hacer scroll,
 * equivalente al [data-reveal] del diseño original de Claude Design.
 */
export default function Reveal({ children, as = 'div', delay = 0, className = '', ...props }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
