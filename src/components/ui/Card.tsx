import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  highlighted = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white border transition-all duration-300',
        highlighted
          ? 'border-neutral-900 shadow-xl shadow-neutral-900/5 ring-1 ring-neutral-900'
          : 'border-neutral-200/80 shadow-sm hover:shadow-md hover:border-neutral-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};