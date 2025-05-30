import HomepageBanner from "@/components/HomepageBanner";

export default function Home() {
  return (
    <main className="site-content pt-25 sm:pt-40">
      <section className="container max-w-6xl mx-auto px-4">
        <HomepageBanner />
      </section>
      <section className="bg-gray-950 p-20 my-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-metro text-white text-9xl">Next Section goes here</h2>
        </div>
      </section>
    </main>
  );
}
