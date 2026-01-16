import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, speed = 150, deleteSpeed = 100, startDelay = 0, loop = true, pauseTime = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;

        let timer;

        // Handle race condition if text changes drastically
        if (!isDeleting && displayedText.length > text.length) {
            setDisplayedText(text);
            return;
        }

        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (isDeleting) {
                    return text.substring(0, prev.length - 1);
                } else {
                    return text.substring(0, prev.length + 1);
                }
            });
        };

        if (!isDeleting && displayedText === text) {
            // Finished typing, wait before deleting
            if (loop) {
                timer = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else if (isDeleting && displayedText === '') {
            // Finished deleting, wait before typing again
            timer = setTimeout(() => setIsDeleting(false), 500);
        } else {
            // Typing or deleting in progress
            timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, isStarted, text, speed, deleteSpeed, loop, pauseTime]);

    return (
        <span className="inline-block relative">
            <span className="invisible">{text}</span> {/* Placeholder to reserve height/width if needed, but width changes so maybe just height? For now let's stick to inline-block behavior without reserving full width to avoid layout jumps if aligned left. Actually user layout is centered or left aligned? In Hero it is left aligned. Reserving width might look weird if cursor is far. Let's just render displayedText. */}
            <span className="absolute top-0 left-0">
                {displayedText}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block ml-1 w-0.5 h-[1em] bg-current align-middle mb-1"
                />
            </span>
        </span>
    );
};

// Reverting the "reserve space" idea because it might mess up the center alignment or flow.
// Simple version is better.

const TypewriterSimple = ({ text, speed = 150, deleteSpeed = 100, startDelay = 0, loop = true, pauseTime = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;

        let timer;

        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (isDeleting) {
                    return text.substring(0, prev.length - 1);
                } else {
                    return text.substring(0, prev.length + 1);
                }
            });
        };

        if (!isDeleting && displayedText === text) {
            if (loop) {
                timer = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else if (isDeleting && displayedText === '') {
            timer = setTimeout(() => setIsDeleting(false), 500);
        } else {
            timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, isStarted, text, speed, deleteSpeed, loop, pauseTime]);

    return (
        <span className="inline-block">
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 w-0.5 h-[1em] bg-current align-middle mb-1"
            />
        </span>
    );
};

export default TypewriterSimple;
