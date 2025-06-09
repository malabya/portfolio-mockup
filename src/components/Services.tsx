import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <Heading as="h2" subheading="What I Do Best" heading="Expert Web Solutions, Built for Performance" />
      <p className="text-gray-700 max-w-3xl">
        End-to-end web development services tailored for performance, security, and scalability. From CMS implementation to frontend theming and ongoing maintenance — solutions built to last and evolve.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 pt-6 mt-6 sm:pt-12 md:mt-12">
        <ServiceCard heading="Development" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Upgrade & Migration" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Maintenance & Support" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Consulting/Audit" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Decoupled CMS" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Frontend" href="/services">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
      </div>
    </>
  )
}
