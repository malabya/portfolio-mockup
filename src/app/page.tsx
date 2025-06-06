import About from "@/components/About";
import BannerCTA from "@/components/BannerCTA";
import Container from "@/components/Container";
import Expertise from "@/components/Expertise";
import HomepageBanner from "@/components/HomepageBanner";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="site-content relative -z-0 pt-30 md:pt-40 lg:pt-50">
      <Container bgColor="bg-white" bgImageUrl="/images/hero-pattern.svg" spacingBottomClass="pb-20 md:pb-40">
        <HomepageBanner />
      </Container>
      <Container bgColor="bg-white" bgImageUrl="/images/hero-pattern.svg" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <About />
      </Container>
      <Container bgColor="bg-light" spacingTopClass="pt-20 md:pt-40" spacingBottomClass="pb-20 md:pb-40">
        <Portfolio />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-20 md:pt-40" spacingBottomClass="pb-10 md:pb-20">
        <Expertise />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <Services />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-20 md:pb-40">
        <BannerCTA />
      </Container>
    </main>
  );
}
