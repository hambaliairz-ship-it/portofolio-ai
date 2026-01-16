import React from 'react';

const Icon = ({ icon, size = 'md', className = '', ...props }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  const sizeClass = sizes[size] || sizes.md;

  // Placeholder for icon implementation
  // In a real app, you would use react-icons or similar
  return (
    <span className={`${sizeClass} ${className}`} {...props}>
      {icon}
    </span>
  );
};

export default Icon;