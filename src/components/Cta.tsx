// src/components/Cta.tsx
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'wrapper';
  className?: string;
};

export default function Cta({ href, children, variant = 'primary', className }: CtaProps) {
  const baseStyles = 'inline-flex items-center font-bold rounded-3xl border transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-primary px-4 py-2 text-white border-primary hover:bg-white hover:text-primary',
    secondary: 'bg-white px-4 py-2 text-primary border-primary hover:bg-primary hover:text-white',
    tertiary: 'bg-none px-0 py-0 text-gray-500 border-0 hover:text-primary',
    wrapper: 'bg-transparent px-0 py-0 text-inherit border-0'
  };

  return (
    <Link
      href={href}
      className={clsx(variantStyles[variant], baseStyles, className)}
    >
      <span>{children}</span>
      { variant !== 'wrapper' && (
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
      ) }
    </Link>

  );
}
