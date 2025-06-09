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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-8 pt-6 mt-6 sm:pt-12 md:mt-12">
        <ExpertiseCard icon='/images/drupal-logo.svg' heading='Drupal' url="https://drupal.org" />
        <ExpertiseCard icon='/images/php-logo.svg' heading='PHP' url="https://drupal.org" />
        <ExpertiseCard icon='/images/mysql-logo.svg' heading='MySQL' url="https://drupal.org" />
        <ExpertiseCard icon='/images/html-logo.svg' heading='HTML' url="https://drupal.org" />
        <ExpertiseCard icon='/images/js-logo.svg' heading='JavaScript' url="https://drupal.org" />
        <ExpertiseCard icon='/images/wp-logo.svg' heading='WordPress' url="https://drupal.org" />
        <ExpertiseCard icon='/images/tailwind-logo.svg' heading='Tailwind CSS' url="https://drupal.org" />
        <ExpertiseCard icon='/images/bootstrap-logo.svg' heading='Bootstrap' url="https://drupal.org" />
        <ExpertiseCard icon='/images/webpack-logo.svg' heading='Webpack' url="https://drupal.org" />
        <ExpertiseCard icon='/images/storybook-logo.svg' heading='Storybook' url="https://drupal.org" />
        <ExpertiseCard icon='/images/react-logo.svg' heading='React' url="https://drupal.org" />
        <ExpertiseCard icon='/images/nextjs-logo.svg' heading='NextJS' url="https://drupal.org" />
        <ExpertiseCard icon='/images/apache-logo.svg' heading='Apache' url="https://drupal.org" />
        <ExpertiseCard icon='/images/nginx-logo.svg' heading='Nginx' url="https://drupal.org" />
        <ExpertiseCard icon='/images/css3-logo.svg' heading='CSS3' url="https://drupal.org" />
        <ExpertiseCard icon='/images/docker-logo.svg' heading='Docker' url="https://drupal.org" />
        <ExpertiseCard icon='/images/git-logo.svg' heading='Git' url="https://drupal.org" />
        <ExpertiseCard icon='/images/laravel-logo.svg' heading='Laravel' url="https://drupal.org" />
        <ExpertiseCard icon='/images/typescript-logo.svg' heading='TypeScript' url="https://drupal.org" />
        <ExpertiseCard icon='/images/pantheon-logo.svg' heading='Pantheon' url="https://drupal.org" />
        <ExpertiseCard icon='/images/acquia-cloud-logo.svg' heading='Acquia Cloud' url="https://drupal.org" />
        <ExpertiseCard icon='/images/acsf-logo.svg' heading='ACSF' url="https://drupal.org" />
        <ExpertiseCard icon='/images/webflow-logo.svg' heading='Webflow' url="https://drupal.org" />
      </div>
    </>
  )
}
