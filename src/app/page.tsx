import Header from "@/components/Header";
import Content from "@/components/Content";
import MouseSpotlightItem from "@/components/utils/MouseSpotlight";

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <MouseSpotlightItem />
      </div>

      <main className="relative z-10">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-col lg:flex-row lg:gap-24">
           

            {/* Scrollable content */}
            <div className="flex-1 pt-24">
              <Content />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
