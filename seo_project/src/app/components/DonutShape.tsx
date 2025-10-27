"use client";
import React from 'react';

interface DonutShapeProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  opacity?: number;
  className?: string;
}

const DonutShape: React.FC<DonutShapeProps> = ({ 
  size = 'md', 
  position = 'top-right',
  opacity = 0.6,
  className = ''
}) => {
  // Generate unique IDs for this component instance
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  // Size configurations
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80'
  };

  // Position configurations
  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${positionClasses[position]} ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`donutGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB3B3" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF9999" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF8080" stopOpacity="0.2" />
          </linearGradient>
          
          <filter id={`glow-${uniqueId}`}>
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Create proper donut shape with hollow center */}
        <path
          d="M 100 20 
             A 80 80 0 1 1 99.99 20 
             Z 
             M 100 60 
             A 40 40 0 1 0 99.99 60 
             Z"
          fill={`url(#donutGradient-${uniqueId})`}
          fillRule="evenodd"
          filter={`url(#glow-${uniqueId})`}
        />
      </svg>
    </div>
  );
};

export default DonutShape;
