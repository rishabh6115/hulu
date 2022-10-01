import Image from "next/image";
import React from "react";

const Thumbnails = ({ result }) => {
  const url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-2 group cursor-pointer  transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${url}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
        alt="img"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
      </div>
    </div>
  );
};

export default Thumbnails;
