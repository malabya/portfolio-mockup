import DownloadIcon from "@/assets/download.svg"
import Cta from "./Cta";
import TwoColumnLayout from "./TwoColumnLayout";
import Image from "next/image";

export default function HomepageBanner() {
  return (
    <TwoColumnLayout
      childrenLeftCol={
        <>
          <div className="text-sm text-gray-600 font-semibold mb-4">Hey There 👋 I am</div>
          <div className="mb-4 text-3xl font-metro font-extrabold text-primary md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Malabya
            </span>
          </div>
          <h1 className=" text-gray-600 mb-4">Acquia Certified Drupal Architect | 12+ Years in Drupal 6–10 | Community Contributor | Speaker | Co-Author | Tech Leader</h1>
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
                <Image
                  src='/images/logo1.svg'
                  alt="Specbee Logo"
                  width={170}
                  height={30}
                />
              </div>
              <div className="w-full">
                <Image
                  src='/images/logo2.svg'
                  alt="Valuebound Logo"
                  width={170}
                  height={30}
                />
              </div>
              <div className="w-full">
                <Image
                  src='/images/logo3.svg'
                  alt="Axl Logo"
                  width={170}
                  height={30}
                />
              </div>
            </div>
          </div>
        </>
      }
      childrenRightCol={
        <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:border-2 after:border-primary after:left-0 after:bottom-0 lg:after:left-10 lg:after:bottom-10 after:rounded-4xl after:-z-10 before:content-[''] before:absolute before:w-[100] before:h-[100] before:-bottom-4 before:-left-4 before:-z-10 before:bg-[url('/images/dots.svg')] before:bg-no-repeat before:bg-center">
          <img src="/images/headshot.jpg" alt="headshot" className="rounded-4xl p-3" />
        </div>
      }
    />
  );
}
