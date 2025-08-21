
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, target }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-cyan-500 rounded-lg shadow-md shadow-cyan-500/20 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
    >
      {children}
    </a>
  );
};

export default Button;
