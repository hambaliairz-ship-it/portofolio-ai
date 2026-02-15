import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Text from '../../atom/text/Text';
import { useLanguage } from '../../../context/LanguageContext';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PortfolioCarousel = ({ projects }) => {
    const { t } = useLanguage();
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();
    const x = useMotionValue(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef, projects]);

    const slideLeft = () => {
        const currentX = x.get();
        const newX = Math.min(currentX + 400, 0);
        animate(x, newX, { duration: 0.5, type: "spring", bounce: 0 });
    };

    const slideRight = () => {
        const currentX = x.get();
        const newX = Math.max(currentX - 400, -width);
        animate(x, newX, { duration: 0.5, type: "spring", bounce: 0 });
    };

    return (
        <div className="relative w-full overflow-hidden py-10 group/carousel">

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[500px] bg-linear-to-r from-blue-500/10 to-purple-500/10 rotate-12 blur-3xl rounded-full z-0 pointer-events-none" />

            {/* Navigation Arrows */}
            <button
                onClick={slideLeft}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-hidden opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Previous project"
            >
                <FaChevronLeft className="text-xl" />
            </button>

            <button
                onClick={slideRight}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-hidden opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
                aria-label="Next project"
            >
                <FaChevronRight className="text-xl" />
            </button>

            <motion.div
                ref={carouselRef}
                className="cursor-grab active:cursor-grabbing overflow-hidden z-10 relative"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ x }}
                    whileTap={{ cursor: "grabbing" }}
                    className="flex gap-8 px-4 md:px-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden flex flex-col h-full transform transition-all hover:scale-[1.02] duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                                    }}
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors"
                                            title={t.projects.viewDemo}
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {project.sourceCodeUrl && (
                                        <a
                                            href={project.sourceCodeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                                            title={t.projects.sourceCode}
                                        >
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <Text variant="h3" className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </Text>

                                <Text className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 grow">
                                    {project.description}
                                </Text>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack?.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-800/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-8 gap-2">
                <Text className="text-sm text-gray-400 italic">
                    {t.projects.scrollHint}
                </Text>
            </div>
        </div>
    );
};

export default PortfolioCarousel;
