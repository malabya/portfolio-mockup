import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <Heading as="h2" subheading="What I Do Best">
        Expert Web Solutions, Built for Performance
      </Heading>
      <p className="text-gray-700 max-w-3xl">
        Comprehensive Drupal services including custom development, responsive
        theming, version upgrades, and ongoing maintenance. Solutions are
        tailored for performance, security, and scalability—ensuring smooth
        migrations, reliable support, and future-ready architecture for digital
        platforms of any size. Ideal for businesses seeking stability,
        flexibility, and long-term value in their web infrastructure.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-6 mt-6 sm:pt-12 md:mt-12">
        <ServiceCard heading="Development" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Upgrade & Migration" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Maintenance &" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Consulting" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Audit" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
        <ServiceCard heading="Frontend" href="/development">
          Synergistically repurpose 2.0 customer service rather than multimedia based collaboration and.
        </ServiceCard>
      </div>
    </>
  )
}
