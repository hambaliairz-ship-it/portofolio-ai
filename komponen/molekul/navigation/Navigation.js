import React from 'react';
import Link from 'next/link';
import Button from '../../atom/button/Button';

const Navigation = ({ links, ctaLink, className = "" }) => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`flex items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center space-x-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
      {ctaLink && (
        <Button variant="primary" asChild>
          <a
            href={ctaLink.href}
            onClick={(e) => handleScroll(e, ctaLink.href)}
          >
            {ctaLink.label}
          </a>
        </Button>
      )}
    </nav>
  );
};

export default Navigation;