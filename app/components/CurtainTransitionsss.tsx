// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const CurtainTransition = ({ children }: { children: React.ReactNode }) => {
//     const pathname = usePathname();
//     const [isTransitioning, setIsTransitioning] = useState(false);

//     // Trigger transition only on true pathname changes
//     useEffect(() => {
//         setIsTransitioning(true);
//         const timer = setTimeout(() => setIsTransitioning(false), 2800);
//         return () => clearTimeout(timer);
//     }, [pathname]);

//     const panelVariants = {
//         initial: { top: 0 },
//         enter: (i: number) => ({
//             top: "100%",
//             transition: {
//                 duration: 0.8,
//                 delay: 0.05 * i,
//                 ease: [0.215, 0.61, 0.355, 1]
//             }
//         }),
//         exit: { top: 0 }
//     };

//     const logoAnim = {
//         initial: { opacity: 0, y: 20, scale: 0.8 },
//         enter: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: { delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
//         },
//         exit: { opacity: 0, transition: { duration: 0.4 } }
//     };

//     return (
//         <>
//             <AnimatePresence mode="wait">
//                 {isTransitioning && (
//                     <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
//                         {/* Architectural Grid Panels - Only exists during transition */}
//                         <div className="absolute inset-0 flex">
//                             {[...Array(16)].map((_, i) => (
//                                 <motion.div
//                                     key={i}
//                                     custom={i}
//                                     variants={panelVariants}
//                                     initial="initial"
//                                     animate="enter"
//                                     className="relative flex-1 bg-[#191c1e] border-r border-white/5 last:border-r-0"
//                                 >
//                                     {/* Single Light Sweep - No Infinity Loop */}

//                                 </motion.div>
//                             ))}
//                         </div>

//                     </div>
//                 )}
//             </AnimatePresence>

//             {/* Main Content Fade In */}
//             <motion.div
//                 key={pathname}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 {children}
//             </motion.div>
//         </>
//     );
// };

// export default CurtainTransition;
