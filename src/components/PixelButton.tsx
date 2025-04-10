
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-retro-purple text-retro-white hover:bg-retro-blue',
    secondary: 'bg-retro-gray text-retro-white hover:bg-retro-dark',
    success: 'bg-retro-green text-retro-white hover:bg-retro-blue',
    danger: 'bg-retro-red text-retro-white hover:bg-retro-pink',
    warning: 'bg-retro-yellow text-retro-black hover:bg-retro-orange',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  return (
    <button
      className={cn(
        'pixel-button',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        'font-pixel uppercase transition-colors',
        'animate-pixel-pulse hover:animate-none',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelButton;
