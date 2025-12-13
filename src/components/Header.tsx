import Menu from "./Menu";
import Contacts from "./Contacts";
import PageDetailsFile from "@p/configs/page_details.json";

const Header = () => {
  const header = PageDetailsFile.header;

  return (
    <aside
      className="
        hidden lg:flex
        lg:sticky lg:top-0
        h-screen
        w-[420px]
        flex-col
        justify-between
        pt-24
        pb-10
      "
    >
      {/* Top */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[3rem] leading-tight font-bold text-white whitespace-nowrap">
          Eva Natalie Burgos
        </h1>

        <h2 className="text-2xl font-medium text-white">
          {header.position}
        </h2>

        <p className="text-[1.05rem] leading-relaxed text-muted-foreground max-w-[340px]">
          {header.summary}
        </p>

        <div className="mt-10">
          <Menu MenuDetails={PageDetailsFile.menu} />
        </div>
      </div>

      {/* Bottom */}
      <Contacts />
    </aside>
  );
};

export default Header;
