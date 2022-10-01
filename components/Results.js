import React from "react";
import Thumbnails from "./Thumbnails";

const Results = ({ results }) => {
  console.log(results);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((item) => (
        <Thumbnails key={item._id} result={item} />
      ))}
    </div>
  );
};

export default Results;
