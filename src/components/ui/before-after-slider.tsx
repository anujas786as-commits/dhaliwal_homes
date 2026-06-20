"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Original Site",
  afterLabel = "Completed Design",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    
    // Boundary restrictions
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-gold/15 rounded-sm shadow-2xl"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="After project completion"
        fill
        className="object-cover pointer-events-none"
        priority
      />
      <div className="absolute right-4 bottom-4 z-10 bg-gold/90 text-charcoal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
        {afterLabel}
      </div>

      {/* Before Image (Clipping Foreground) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
          {/* We must render a full-sized image inside the clipped container, matching the container width */}
          <div className="absolute inset-y-0 left-0 w-[100vw]" style={{ width: containerRef.current?.getBoundingClientRect().width, height: containerRef.current?.getBoundingClientRect().height }}>
            <Image
              src={beforeImage}
              alt="Before project start"
              fill
              className="object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-4 bottom-4 z-10 bg-charcoal/95 text-beige text-xs font-bold uppercase tracking-widest px-3 py-1.5 border border-gold/10 rounded-sm">
        {beforeLabel}
      </div>

      {/* Slider Split Line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-gold z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Drag Handle Dial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold border border-charcoal flex items-center justify-center shadow-lg pointer-events-none">
          <svg
            className="w-4 h-4 text-charcoal fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
