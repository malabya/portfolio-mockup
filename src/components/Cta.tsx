// src/components/Cta.tsx
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Cta({ href, children, variant = 'primary', className }: CtaProps) {
  const baseStyles = 'flex items-center px-4 py-2 font-bold rounded-3xl border transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-primary text-white border-primary hover:bg-white hover:text-primary',
    secondary: 'bg-white text-primary border-primary hover:bg-primary hover:text-white',
  };

  return (
    <Link
      href={href}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      <span>{children}</span>
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12M9 1l4 4-4 4"
        />
      </svg>
    </Link>

  );
}
