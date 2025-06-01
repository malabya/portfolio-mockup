import Heading from "./Heading";
import Cta from "./Cta";

type ServiceCardProps = {
  children: React.ReactNode;
  heading: string,
  href: string,
}

export default function ServiceCard({ children, heading, href }: ServiceCardProps) {
  return (
    <div className="border rounded-lg border-gray-100 shadow-lg px-6 py-6 hover:shadow-2xl transition-shadow duration-200">
      <Heading as="h4">{heading}</Heading>
      <div className="text-sm pb-4 mb-4 border-b text-gray-600 border-gray-200">
        {children}
      </div>
      <Cta href={href} variant="tertiary">Learn More</Cta>
    </div>
  )
}
