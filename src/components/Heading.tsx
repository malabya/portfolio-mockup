// components/Heading.tsx
import React from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  subheading?: string;
  className?: string;
  children: React.ReactNode;
};

const headingStyles: Record<NonNullable<HeadingProps["as"]>, string> = {
  h1: "text-4xl md:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
};

export default function Heading({ as: Tag = "h2", subheading, className, children }: HeadingProps) {
  const baseClasses = 'font-bold font-metro mb-2 md:mb-4 text-primary';

  return (
    <>
      {subheading && (
        <div className="text-sm uppercase font-bold text-blue-600 mb-4">{subheading}</div>
      )}

      <Tag className={clsx(headingStyles[Tag], baseClasses, className)}>
        {children}
      </Tag>
    </>
  );
}
