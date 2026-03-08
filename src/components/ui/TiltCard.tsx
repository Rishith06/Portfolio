import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  rotationIntensity?: number;
}

export function TiltCard({ children, className = '', rotationIntensity = 15 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -rotationIntensity;
    const rotateYValue = ((x - centerX) / centerX) * rotationIntensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.05 : 1, // Add an extra scale pop on top of the tilt
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        mass: 0.5
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`relative w-full h-full ${className}`}
    >
      {/* Glare effect mapped to mouse position */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-50 pointer-events-none rounded-[inherit]"
          style={{
            background: `radial-gradient(circle at ${
              (rotateY / rotationIntensity + 1) * 50
            }% ${(rotateX / -rotationIntensity + 1) * 50}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}
      
      {/* Container for children to preserve 3D depth */}
      <div 
        style={{ transform: 'translateZ(40px)' }} // Push content outwards for 3D effect
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
