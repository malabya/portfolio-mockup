import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <>
      <Heading subheading="Featured Work">
        Portfolio
      </Heading>
      <p className="text-gray-700 max-w-3xl">
        A curated selection of projects highlighting technical depth and
        creative problem-solving. Each solution reflects a focus on performance,
        usability, and long-term maintainability.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-6 mt-6 sm:pt-12 md:mt-12">
        <ProjectCard
          name="myStipendium.de"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project7.png"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
        <ProjectCard
          name="Partnership of Peace Consortium"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project1.png"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
        <ProjectCard
          name="Department of Health, Wadsworth Center"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project2.png"
          owner="Specbee"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
        <ProjectCard
          name="Thomas"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project3.png"
          owner="Specbee"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
        <ProjectCard
          name="Centre for Professional Education"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project5.png"
          owner="Specbee"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
        <ProjectCard
          name="Curtiss Wright - Defense Solutions"
          description="Efficiently productivate customized human capital through resource maximizing materials. Compellingly negotiate."
          image_url="/images/project6.png"
          owner="Specbee"
          href="https://www.pfp-consortium.org/"
          tags={['Drupal']}
        />
      </div>

    </>

  );
}
