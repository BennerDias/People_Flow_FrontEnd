import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card shadow-sm mb-3 w-50 h-60 ${className}`}>
      <div className='card-body w-100 p-3'>{children}</div>
    </div>
  );
}

export default Card;
