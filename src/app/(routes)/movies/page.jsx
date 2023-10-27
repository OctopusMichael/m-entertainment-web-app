"use client";
import React, { useState, useEffect } from "react";
import data from "@/json/data.json";
import useStore from "@/hooks/useStore";
import Card from "@/components/Card";

const Movies = () => {
  let movies = data.filter((e) => e.category == "Movie");
  const searchValue = useStore((state) => state.searchValue);
  const [movieList, setMovieList] = useState(movies);

  useEffect(() => {
    const update = movies.filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    );
    setMovieList(update);
  }, [searchValue]);

  if (!movieList) {
    return <p className="text-white">loading...</p>;
  }
  return (
    <section className="  ">
      <div className="flex flex-col gap-2">
        {searchValue === "" ? (
          <h1 className="text-white text-start text-[24px] md:text-[40px] font-bold ">
            Movies
          </h1>
        ) : (
          <h1 className="text-white text-start text-[40px] ">
            {`Found  ${movieList.length} results for  ${searchValue} `}
          </h1>
        )}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[40px]  ">
          {movieList.map((e) => (
            <Card e={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
