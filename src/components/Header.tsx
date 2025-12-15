import Menu from "./Menu";
import Contacts from "./Contacts";

const menuDetails = [
  { section: "About", isActive: false },
  { section: "Experience", isActive: false}, 
  { section: "Projects", isActive: false}, 
  { section: "Certifications", isActive: false},

]
const Header = () => {
 
  return (
    <aside
      className="
        hidden lg:flex w-full

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
          Biomedical Engineering Student
        </h2>

        <p className="text-[1.05rem] leading-relaxed text-muted-foreground max-w-[340px]">
          I explore how thoughtful engineering can improve the way we understand and support the human body. 
        </p>

        <div className="mt-10">
          <Menu MenuDetails={menuDetails} />
        </div>
      </div>

      {/* Bottom */}
      <Contacts />
    </aside>
  );
};

export default Header;
