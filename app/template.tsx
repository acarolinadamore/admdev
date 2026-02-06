'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Determinar direção da transição
  const isGoingToRecruiter = pathname === '/recrutador' && prevPathname.current === '/';
  const isLeavingRecruiter = pathname === '/' && prevPathname.current === '/recrutador';

  useEffect(() => {
    prevPathname.current = pathname;
  }, [pathname]);

  // Quando vai para /recrutador: página atual sai para ESQUERDA, nova entra da DIREITA
  // Quando volta para home: página atual sai para DIREITA, nova entra da ESQUERDA
  const variants = {
    initial: isGoingToRecruiter
      ? { x: '100%', opacity: 0 }  // entra da direita
      : { x: '-100%', opacity: 0 }, // entra da esquerda
    animate: { x: 0, opacity: 1 },
    exit: isLeavingRecruiter
      ? { x: '100%', opacity: 0 }   // sai para direita
      : { x: '-100%', opacity: 0 }, // sai para esquerda
  };

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 200, damping: 35, mass: 1 },
        opacity: { duration: 0.4, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}
