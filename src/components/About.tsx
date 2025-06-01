import TwoColumnLayout from "./TwoColumnLayout";
import Heading from "./Heading";
import IconLink from "./IconLink";

export default function About() {
  return (
    <TwoColumnLayout
      childrenLeftCol={
        <>
          <Heading as="h2">Contributed. Certified. Committed to Quality.</Heading>
          <p className="text-gray-500">Acquia-certified Drupal developer with 12+ years of experience.
            I build secure, scalable, and maintainable Drupal platforms — from
            backend APIs to frontend theming and DevOps workflows.</p>
        </>
      }
      childrenRightCol={
        <>
          <Heading as="h3">Connect with me</Heading>
          <p className="text-gray-500 mb-4">
            Let’s connect and grow your Drupal project together.
            Follow me on social media and Drupal.org to see my work, contributions, and latest updates.
            Reach out anytime — I’m always open to new collaborations and opportunities.
          </p>
          <div className="flex items-center gap-4">
            <IconLink href="#" icon="/images/drupal.svg" alt="Drupal"/>
            <IconLink href="#" icon="/images/github.svg" alt="Github" />
            <IconLink href="#" icon="/images/linkedin.svg" alt="LinkedIn" />
            <IconLink href="#" icon="/images/x.svg" alt="X" />
          </div>
        </>
      }
    />
  );
}
