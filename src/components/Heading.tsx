// components/Heading.tsx
import React from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  subheading?: string;
  className?: string;
  heading: string;
  theme?: "light" | "dark";
};

const headingStyles: Record<NonNullable<HeadingProps["as"]>, string> = {
  h1: "text-4xl md:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
};

export default function Heading({ as: Tag = "h2", subheading, className, heading, theme = 'light' }: HeadingProps) {
  const baseClasses = 'font-bold font-metro mb-2 md:mb-4';
  const themeClasses = theme === 'light'  ? 'text-primary' : 'text-white';

  return (
    <>
      {subheading && (
        <div className="mb-4 uppercase font-metro font-extrabold text-primary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{subheading}</span>
        </div>
      )}

      <Tag className={clsx(headingStyles[Tag], baseClasses, themeClasses, className)}>
        {heading}
      </Tag>
    </>
  );
}
