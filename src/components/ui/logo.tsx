import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "main" | "monochrome" | "icon" | "favicon";
  theme?: "light" | "dark";
  size?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "main",
  size = 200,
}) => {
  const logoSrc = "/images/logo/WhatsApp Image 2026-06-07 at 3.10.27 PM (1).png";
  
  // Parse numeric width size
  const widthVal = typeof size === "string" ? parseInt(size, 10) || 200 : size;
  const heightVal = Math.round(widthVal * 0.4); // Maintain logo aspect ratio (2.5:1)

  if (variant === "icon" || variant === "favicon") {
    return (
      <div className={`relative flex items-center justify-center ${className}`} style={{ width: 48, height: 48 }}>
        <Image
          src={logoSrc}
          alt="Dhaliwal Homes Icon"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center ${className}`} style={{ width: widthVal, height: heightVal }}>
      <Image
        src={logoSrc}
        alt="Dhaliwal Homes Logo"
        width={widthVal}
        height={heightVal}
        className="object-contain"
        priority
      />
    </div>
  );
};
