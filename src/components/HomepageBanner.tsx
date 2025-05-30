import DownloadIcon from "@/assets/download.svg"
import Cta from "./Cta";

export default function HomepageBanner() {
  return (
    <div className="banner flex flex-col md:flex-row md:items-center md:gap-20 ">
      <div className="banner__left flex-1 lg:pe-20">
        <div className="text-sm text-gray-600 font-semibold mb-4">Hey There 👋 I am</div>
        <h1 className="font-metro font-bold text-4xl md:text-6xl text-primary mb-2">
          Malabya
        </h1>
        <p className="text-lg text-gray-600 mb-4">Acquia Certified Drupal Architect | 12+ Years in Drupal 6–10 | Community Contributor | Speaker | Co-Author | Tech Leader</p>
        <div className="flex flex-wrap gap-8 items-center mb-12">
          <Cta href="#" variant="primary">Learn More</Cta>
          <a href="#" className="font-bold text-gray-600 flex gap-2 items-center hover:text-primary">
            <DownloadIcon className="rounded-full bg-primary" />
            Download CV
          </a>
        </div>
        <div className="my-6">
          <p className="text-sm text-gray-400 font-bold mb-2 flex items-center gap-4 after:content-[''] after:h-0.5 after:w-12 after:bg-gray-400">
            Companies worked for
          </p>
          <div className="flex items-center gap-8">
            <div className="w-full">
              <img src="/images/logo1.svg" alt="Specbee Logo" />
            </div>
            <div className="w-full">
              <img src="/images/logo2.svg" alt="Specbee Logo" />
            </div>
            <div className="w-full">
              <img src="/images/logo3.svg" alt="Specbee Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__left flex-1 relative mt-10 md:mt-0">
        <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:border-2 after:border-primary after:left-10 after:bottom-10 after:rounded-4xl after:-z-10 before:content-[''] before:absolute before:w-[100] before:h-[100] before:-bottom-2 before:-left-2 before:-z-10 before:bg-[url('/images/dots.svg')] before:bg-no-repeat before:bg-center">
          <img src="/images/headshot.jpg" alt="headshot" className="rounded-4xl p-3"/>
        </div>
      </div>
    </div>
  );
}
