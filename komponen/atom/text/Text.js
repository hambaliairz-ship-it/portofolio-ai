import React from 'react';

const Text = ({ children, variant = 'p', className = '', ...props }) => {
  const variants = {
    h1: 'text-4xl font-bold tracking-tight',
    h2: 'text-3xl font-bold tracking-tight',
    h3: 'text-2xl font-bold tracking-tight',
    h4: 'text-xl font-bold tracking-tight',
    p: 'text-base leading-relaxed',
    small: 'text-sm',
    large: 'text-lg font-semibold',
    muted: 'text-sm text-gray-500 dark:text-gray-400'
  };

  const Element = variant;
  const classes = `${variants[variant] || variants.p} ${className}`;

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
};

export default Text;