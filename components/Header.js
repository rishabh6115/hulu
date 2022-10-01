import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

import { icons } from "../constants/Icons";

const Header = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row m-5 justify-between place-items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          {icons.map((item) => (
            <HeaderItem Icon={item.icon} title={item.title} key={item.title} />
          ))}
        </div>
        <Image
          className="object-contain -translate-y-4"
          src="http://links.papareact.com/ua6"
          alt="hulu logo"
          width={200}
          height={100}
        />
      </div>
    </>
  );
};

export default Header;
