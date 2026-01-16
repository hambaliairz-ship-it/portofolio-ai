import React from 'react';
import Button from '../../atom/button/Button';
import Text from '../../atom/text/Text';

const Card = ({ title, description, footer, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 ${className}`}>
      {(title || description) && (
        <div className="p-6">
          {title && <Text variant="h3" className="mb-2 text-gray-900 dark:text-white">{title}</Text>}
          {description && <Text className="text-gray-600 dark:text-gray-300">{description}</Text>}
          {children}
        </div>
      )}
      {children && !title && !description && (
        <div className="p-6">
          {children}
        </div>
      )}
      {footer && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;