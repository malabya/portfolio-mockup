import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode,
  bgColor?: 'bg-white' | 'bg-light' | 'bg-primary' | 'bg-image',
  spacingTopClass?: 'pt-10 md:pt-20' | 'pt-20 md:pt-40' | 'pt-30 md:pt-60',
  spacingBottomClass?: 'pb-10 md:pb-20' | 'pb-20 md:pb-40' | 'pb-30 md:pb-60',
  additionalClasses?: string,
  bgImageUrl?: string,
}

export default function Container({ children, bgColor = 'bg-white', spacingTopClass, spacingBottomClass, additionalClasses, bgImageUrl }: ContainerProps) {
  const baseClasses = 'w-full relative z-100';
  const backgroundStyles = bgImageUrl
    ? {
      backgroundImage: `url(${bgImageUrl})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }
    : undefined;
  return (
    <section className={clsx(baseClasses, bgColor, spacingTopClass, spacingBottomClass, additionalClasses)} style={backgroundStyles}>
      <div className="container max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
