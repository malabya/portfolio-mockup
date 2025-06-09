import BannerCTA from "@/components/BannerCTA";
import Container from "@/components/Container";
import Cta from "@/components/Cta";
import Heading from "@/components/Heading";
import JumboCard from "@/components/JumboCard";
import TwoColumnLayout from "@/components/TwoColumnLayout";

export default function ServicesPage() {
  return (
    <main className="site-content relative -z-0 pt-30 md:pt-40 lg:pt-50">
      <Container bgColor="bg-white" bgImageUrl="/images/hero-pattern.svg" spacingBottomClass="pb-20 md:pb-40">
        <Heading as="h1" subheading="Offerings" heading="Tailored Digital Solutions That Drive Results" />
      </Container>
      <Container bgColor="bg-light" spacingTopClass="pt-20 md:pt-40" spacingBottomClass="pb-20 md:pb-40">
        <TwoColumnLayout
          childrenLeftCol={
            <>
              <Heading as="h2" heading="Simple. Scalable. Effective." />
              <Cta href="/contact" variant="secondary" className="my-6">Tell Me about your Project</Cta>
            </>
          }
          childrenRightCol={
            <>
              <p className="text-lg/8 text-gray-900">Delivering clean, robust, and scalable digital solutions tailored to meet business goals, timelines, and budgets. Each service is crafted to ensure maximum performance, seamless user experiences, and long-term maintainability. Whether it&apos;s development, upgrades, or support—every project is approached with a focus on results, efficiency, and precision.</p>
            </>
          }
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Development"
          heading="Engineered for Performance, Designed to Scale"
          description="Building reliable, high-performance websites using Drupal and WordPress — tailored for functionality, speed, and scalability."
          items={[
            'Full-scale Drupal development for content-driven or commerce sites',
            'Custom WordPress builds with modern best practices',
            'Secure and scalable e-commerce solutions',
            ]
          }
          image="/images/project7.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Upgrade & Migration"
          heading="Keep Moving Forward Without Breaking Things"
          description="Ensure smooth, stable upgrades from older versions to the latest Drupal release — with zero content loss and SEO-safe transitions."
          items={[
            'Upgrade from Drupal 8/9 to Drupal 10 with full compatibility',
            'Migrate legacy Drupal 7 sites to Drupal 10 architecture',
            'Preserve SEO, content structure, and custom functionality',
          ]
          }
          image="/images/project2.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Maintenance & Support"
          heading="Peace of Mind with Proactive Maintenance"
          description="Stay secure and up-to-date with continuous support, module updates, and performance monitoring for your Drupal projects."
          items={[
            'Monthly Drupal core and contributed module updates',
            'Security patching and vulnerability monitoring',
            'Technical support and issue resolution',
          ]
          }
          image="/images/project6.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Consulting / Audit"
          heading="Clarity Through Code and Strategy"
          description="Identify bottlenecks and opportunities for improvement with expert consulting across performance, SEO, and user experience."
          items={[
            'Comprehensive website audits (code, SEO, performance)',
            'Expert consultation on architecture and project planning',
            'Usability, accessibility, and editorial experience improvements',
          ]
          }
          image="/images/project7.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Decoupled CMS"
          heading="The Future of CMS, Built Today"
          description="Decoupled and progressive web apps powered by Drupal and Next.js — delivering speed, flexibility, and modern UX."
          items={[
            'Next.js frontend with Drupal or Wordpress as a headless backend',
            'GraphQL/REST API integration and optimization',
            'Hybrid CMS architecture with scalable performance',
          ]
          }
          image="/images/project1.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <JumboCard
          subheading="Frontend"
          heading="Polished Frontends with Performance at Heart"
          description="Custom theming with Drupal and Next.js, styled with utility-first Tailwind CSS — fast, accessible, and responsive."
          items={[
            'Drupal theme development with clean markup and accessibility',
            'Responsive UI development with Tailwind CSS',
            'Component-based development using Storybook and modern tools',
          ]
          }
          image="/images/project3.png"
        />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-20 md:pb-40">
        <BannerCTA />
      </Container>
    </main>
  );
}
