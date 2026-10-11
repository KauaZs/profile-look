import React from 'react';
import type { ImageAdjustments } from '../types';

interface AvatarRendererProps {
  imageSrc: string;
  adjustments: ImageAdjustments;
  size?: number | string;
  className?: string;
  shape?: 'circle' | 'square' | 'rounded';
  showOpenToWork?: boolean;
}

export const AvatarRenderer: React.FC<AvatarRendererProps> = ({
  imageSrc,
  adjustments,
  size = 100,
  className = '',
  shape = 'circle',
  showOpenToWork = false,
}) => {
  const shapeClass = 
    shape === 'circle' ? 'rounded-full' : 
    shape === 'rounded' ? 'rounded-2xl' : 'rounded-none';

  return (
    <div
      className={`relative overflow-hidden shrink-0 select-none ${shapeClass} ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        backgroundColor: adjustments.backgroundColor || '#000000',
      }}
    >
      {/* Inner transformed container */}
      <div className="w-full h-full relative flex items-center justify-center pointer-events-none">
        <img
          src={imageSrc}
          alt="Avatar"
          className="max-w-none origin-center transition-transform duration-75 will-change-transform"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `translate(${adjustments.x}%, ${adjustments.y}%) scale(${adjustments.zoom}) rotate(${adjustments.rotation}deg) ${
              adjustments.flipHorizontal ? 'scaleX(-1)' : ''
            }`,
          }}
          draggable={false}
        />
      </div>

      {/* LinkedIn #OpenToWork frame overlay */}
      {showOpenToWork && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            {/* Curved text path ring */}
            <path
              id="opentowork-arc"
              d="M 12 50 A 38 38 0 0 0 88 50"
              fill="none"
              stroke="#057642"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              id="opentowork-text-path"
              d="M 16 52 A 34 34 0 0 0 84 52"
              fill="none"
            />
            <text fill="#ffffff" fontSize="8" fontWeight="bold" letterSpacing="0.8">
              <textPath href="#opentowork-text-path" startOffset="50%" textAnchor="middle">
                #OPEN TO WORK
              </textPath>
            </text>
          </svg>
        </div>
      )}
    </div>
  );
};
