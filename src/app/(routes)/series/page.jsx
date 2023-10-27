"use client";
import React, { useState, useEffect } from "react";
import data from "@/json/data.json";
import { Film, Tv } from "lucide-react";
import useStore from "@/hooks/useStore";
import Card from "@/components/Card";



const series = () => {
  const series = data.filter((e) => e.category == "TV Series");
  const searchValue = useStore((state) => state.searchValue);
  const [seriesList, setSeriesList] = useState(series);

  useEffect(() => {
    const update = series.filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    );
    setSeriesList(update);
  }, [searchValue]);

  return (
    <section className="  ">
      <div className="flex flex-col gap-2 ">
        {searchValue === "" ? (
          <h1 className="text-white text-start text-[24px] md:text-[40px] font-bold">Tv Series</h1>
        ) : (
          <h1 className="text-white text-start text-[40px] ">
            {`Found  ${seriesList.length} results for  ${searchValue} `}
          </h1>
        )}

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[40px]  ">
          {seriesList.map((e) => (
           <Card e={e}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default series;
