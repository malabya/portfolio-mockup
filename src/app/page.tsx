import About from "@/components/About";
import Container from "@/components/Container";
import HomepageBanner from "@/components/HomepageBanner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="site-content relative -z-0 pt-25 sm:pt-40">
      <Container bgColor="bg-white" spacingBottomClass="pb-20 md:pb-40">
        <HomepageBanner />
      </Container>
      <Container bgColor="bg-gray-100" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-10 md:pb-20">
        <About/>
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-20 md:pb-40">
        <Services />
      </Container>
    </main>
  );
}
