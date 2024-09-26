import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={`border rounded px-2 py-1 ${className}`} {...props} />;
};

export default Input;