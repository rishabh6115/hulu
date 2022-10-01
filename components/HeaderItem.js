import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <>
      <div className="group cursor-pointer flex flex-col w-12 sm:w-20 hover:text-whiteplace-items-center">
        {Icon}
        <p className="opacity-0 group-hover:opacity-100 tracking-widest text-center text-xs sm:text-base">
          {title}
        </p>
      </div>
    </>
  );
};

export default HeaderItem;
