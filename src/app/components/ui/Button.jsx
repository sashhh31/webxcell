import React from 'react';

const Button = ({children, className}) => {
  return (
    <div className={`px-4 py-2 bg-[#EF7915] rounded-full ${className}`}>
      <p>{children}</p>
    </div>
  );
};

export default Button;