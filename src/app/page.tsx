import Container from "@/components/Container";
import HomepageBanner from "@/components/HomepageBanner";

export default function Home() {
  return (
    <main className="site-content pt-25 sm:pt-40">
      <Container bgColor="bg-white" spacingBottomClass="pb-20 md:pb-40">
        <HomepageBanner />
      </Container>
      <Container bgColor="bg-white" spacingTopClass="pt-10 md:pt-20" spacingBottomClass="pb-20 md:pb-40">
        Content goes here
      </Container>
    </main>
  );
}
