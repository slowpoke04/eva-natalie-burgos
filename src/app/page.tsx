import Header from "@/components/Header";
import Content from "@/components/Content";
import MouseSpotlightItem from "@/components/utils/MouseSpotlight";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center px-6 py-8 lg:px-24">
      <MouseSpotlightItem />

      <div className="flex flex-col z-5 w-full max-w-7xl font-sans text-sm lg:flex-row lg:justify-between">
        <Header />

        {/* Content column */}
        <div className="z-5 w-full pt-6 lg:pt-24 lg:max-w-4xl">
          <Content />
        </div>
      </div>
    </main>
  );
}
