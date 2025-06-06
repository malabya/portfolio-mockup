import Cta from "./Cta";
import Heading from "./Heading";

export default function BannerCTA() {
  return (
    <div className="w-full p-12 border border-gray-300 bg-primary rounded-2xl">
      <Heading as='h2' subheading="Let&apos;s build something great." heading="Have a Project in Mind?" theme="dark"/>
      <p className="text-lg text-gray-300 mb-6 md:sm-8">
        Whether you&apos;re starting a new project from scratch, looking to
        transform an existing idea into a high-performing digital product,
        need reliable ongoing support, or planning a seamless upgrade to the
        latest Drupal version — let&apos;s connect.
      </p>
      <div className="flex items-center flex-wrap gap-4 md:gap-8">
        <Cta href="#" variant="secondary">Start a Project</Cta>
        <Cta href="email:hi@example.com" variant="primary">Drop a Message</Cta>
      </div>
    </div>
  );
}
