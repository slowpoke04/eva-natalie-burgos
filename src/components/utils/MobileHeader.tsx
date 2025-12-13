"use client";

import Menu from "../Menu";
import PageDetailsFile from "@p/configs/page_details.json";

const MobileHeader = () => {
  const header = PageDetailsFile.header;

  return (
    <header className="lg:hidden px-6 py-6 border-b border-white/10">
      <h1 className="text-2xl font-bold text-white">
        Eva Natalie Burgos
      </h1>

      <p className="text-sm text-muted-foreground mt-1">
        {header.position}
      </p>

      <div className="mt-4">
        <Menu MenuDetails={PageDetailsFile.menu} />
      </div>
    </header>
  );
};

export default MobileHeader;
