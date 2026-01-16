import React, { useState } from 'react';
import Input from '../../atom/input/Input';
import Button from '../../atom/button/Button';
import Text from '../../atom/text/Text';

const Form = ({ fields, onSubmit, submitLabel = "Submit", className = "" }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} wajib diisi`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          value={formData[field.id] || ''}
          onChange={handleChange}
          error={errors[field.id]}
          required={field.required}
        />
      ))}
      <Button type="submit" variant="primary">
        {submitLabel}
      </Button>
    </form>
  );
};

export default Form;