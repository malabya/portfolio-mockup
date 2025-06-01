import Image from "next/image";
import clsx from 'clsx';

type IconLinkProps = {
  href: string
  icon: string,
  alt: string,
  className?: string,
}

export default function IconLink({ href, icon, alt, className }: IconLinkProps) {
  const baseClasses = "p-2 border border-primary rounded-full flex items-center justify-center bg-white hover:bg-blue-100 transition-all duration-200";

  return (
    <a href={href} className={clsx(baseClasses, className)}>
      <Image
        src={icon}
        alt={alt}
        width={20}
        height={20}
      />
    </a>
  )
}
