import Image from "next/image";
import Heading from "./Heading";
import ExpertiseCard from "./ExpertiseCard";

export default function Expertise() {
  return (
    <>
      <Heading as="h2" subheading="Tools. Technologies. Expertise." heading="What Powers the Work" />
      <p className="text-gray-700 max-w-3xl">
        A robust command over modern web technologies — from enterprise CMS
        platforms to cutting-edge frontend libraries and performance-focused
        dev stacks. Leveraging tools like Drupal, WordPress, React, Next.js,
        Tailwind CSS, and LAMP to build fast, secure, and scalable digital
        solutions tailored to evolving business needs.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 mt-6 sm:pt-12 md:mt-12">
        <ExpertiseCard heading="Backend" items={["Drupal", "WordPress", "Sanity", "Webflow", "Laravel",]} />
        <ExpertiseCard heading="Fronend" items={["HTML/CSS", "JavaScript", "Tailwind CSS", "React/Next JS", "Storybook",]} />
        <ExpertiseCard heading="DevOps" items={["CI/CD Pipelines", "Acquia Cloud", "Pantheon", "Nginx/Apache", "Varnish/Edge Cache",]} />
        <ExpertiseCard heading="Others" items={["SEO", "Version Control", "Headless CMS", "Content Modeling", "Cypress",]} />
      </div>
    </>
  )
}
