/* import Image from "next/image"; */
"use client";
import React, { useState, useEffect} from "react";

import data from "@/json/data.json";
import Trending from "@/components/Trending";
import Recomended from "@/components/Recomended";
import useStore from "@/hooks/useStore";
import NewRecom from "@/components/NewRecom";



export default function Home() {
  const [completList, setCompletList] = useState(data);
  const searchValue = useStore((state) => state.searchValue);

  useEffect(() => {
    const update = data.filter((element) =>
      element.title
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    );
    setCompletList(update);
  }, [searchValue]);

  return (
    <>
      {searchValue === "" ? (
        <>
          <Trending completList={completList} searchValue={searchValue} />
          <Recomended completList={completList} searchValue={searchValue} />
        </>
      ) : (
        <NewRecom completList={completList} searchValue={searchValue} />
      )}
    </>
  );
}
