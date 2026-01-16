import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
    const [shouldUnmount, setShouldUnmount] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldUnmount(true);
            setTimeout(() => {
                finishLoading();
            }, 500); // Wait for exit animation
        }, 2000); // Display time

        return () => clearTimeout(timer);
    }, [finishLoading]);

    return (
        <AnimatePresence>
            {!shouldUnmount && (
                <motion.div
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative flex flex-col items-center"
                    >
                        {/* Logo / Icon Animation */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 360],
                                borderRadius: ["20%", "50%", "20%"],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.5, 1],
                                repeat: Infinity,
                            }}
                            className="w-20 h-20 mb-6 bg-linear-to-tr from-blue-600 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center"
                        >
                            <span className="text-3xl font-bold text-white">H</span>
                        </motion.div>

                        {/* Text Animation */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                        >
                            Portfolio Hambali
                        </motion.h1>
                        <motion.div
                            className="h-1 w-0 bg-blue-600 mx-auto rounded-full"
                            animate={{ w: "100px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            style={{ width: 0 }} // default
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
