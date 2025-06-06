import Heading from "./Heading";
import Cta from "./Cta";

type ServiceCardProps = {
  children: React.ReactNode;
  heading: string,
  href: string,
}

export default function ServiceCard({ children, heading, href }: ServiceCardProps) {
  return (
    <article className="inset-px rounded-lg border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <header className="relative h-8 bg-gray-100 after:content-[''] after:absolute after:w-full after:h-full after:left-6 after:top-0 after:bg-[url('/images/controls.svg')] after:bg-no-repeat after:bg-left"></header>
      <div className="px-6 py-6 ">
        <Cta href={href} variant="wrapper">
          <Heading as="h4" heading={heading} />
        </Cta>
        <div className="text-sm text-gray-600">
          {children}
        </div>
      </div>
      <footer className="px-6 py-2 bg-gray-100">
        <Cta href={href} variant="tertiary">Learn More</Cta>
      </footer>
    </article>
  )
}
