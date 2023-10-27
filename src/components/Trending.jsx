"use client";
import React, { useState, useEffect } from "react";
import { Bookmark, Film, Tv } from "lucide-react";
import { register } from "swiper/element/bundle";

register();

const Trending = ({ completList }) => {
  const [width, setWidth] = useState(null);
  const [view, setView] = useState(2.5);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
    
    if (width < 1023) {
      setView(1.5);
    } else {
      setView(2.5);
    }
    
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [width]);
  
  const updateSize = () => {
    setWidth(window.innerWidth);
  };
  
  


  return (
    <section className=" flex flex-col gap-2  ">
      <h1 className="text-white text-[24px] lg:text-[40px] font-bold ">Trending </h1>

      <swiper-container slides-per-view={view}   >
        {completList.map((e, i) =>
          e.isTrending ? (
            <swiper-slide key={i}>
              <div
                id="containerPicture"
                className=" cursor-pointer group/item  overflow-hidden  rounded-2xl relative flex flex-col justify-center items-center  "
              >
                <picture className="flex justify-center items-center ">
                  <source
                    srcSet={e.thumbnail.trending.large}
                    media="(min-width: 768px)"
                  />
                  <img
                    className=" group-hover/item:scale-125 transition-all w-auto  "
                    src={e.thumbnail.trending.small}
                    alt={e.title}
                  />
                </picture>
                <span className="z-50 absolute top-2 right-2 lg:top-5 lg:right-5 w-[30px] h-[30px] lg:w-[40px]  lg:h-[40px] rounded-full bg-[#00000086] hover:bg-[#ffffff57] text-white flex justify-center items-center">
                  <Bookmark className="w-[18px] lg:w-full" />
                </span>
                <span className="z-40 invisible group-hover/item:visible absolute  flex  justify-center items-center gap-2  lg:gap-4  w-[100px] h-[50px] lg:w-[120px] lg:h-[50px] rounded-3xl bg-[#ffffff4b] text-white">
                  <img
                    className=""
                    src="/assets/icon-play.svg"
                    alt="icon-play"
                  />
                  <h1 className="text-white font-bold">Play</h1>
                </span>
                <div className="z-30 flex flex-col   absolute lg:bottom-5 lg:left-5 bottom-3 left-3  group-hover/item:invisible  ">
                  <div className="flex flex-row text-[#cfd1d6] text-[14px] lg:text-[18px] gap-2 items-center font-bold ">
                    <p>{e.year}</p>
                    <span className="w-[5px] h-[5px] bg-gray rounded-full" />
                    {e.category === "Movie" ? <Film /> : <Tv />}
                    <p>{e.category}</p>
                    <span className="w-[5px] h-[5px] bg-gray rounded-full" />
                    <p>{e.rating}</p>
                  </div>
                  <h1 className=" text-white text-[14px]  lg:text-[28px] font-bold">{e.title}</h1>
                </div>
              </div>
            </swiper-slide>
          ) : null
        )}
      </swiper-container>
    </section>
  );
};

export default Trending;
