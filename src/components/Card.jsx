import { Bookmark, Film, Tv } from "lucide-react";

const Card = ({ e }) => {
  return (
    <>
      <div  className="flex flex-col gap-5 my-[10px]">
        <div
          id="containerPicture"
          className=" cursor-pointer group/item   overflow-hidden  rounded-2xl relative flex flex-col   justify-center items-center "
        >
          <picture className="flex justify-center items-center relative ">
            <source
              srcSet={e.thumbnail.regular.medium}
              media="(min-width: 640px)"
            />
            <source
              srcSet={e.thumbnail.regular.large}
              media="(min-width: 768px)"
            />
            <img
              className=" group-hover/item:scale-125 transition-all  "
              src={e.thumbnail.regular.small}
              alt={e.title}
            />
          </picture>
          <span className="z-50 absolute top-2 right-2 lg:top-5 lg:right-5 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full bg-[#00000086] hover:bg-[#ffffff57] text-white flex justify-center items-center ">
            <Bookmark className="w-[18px] lg:w-full" />
          </span>
          <span className="z-40 invisible group-hover/item:visible absolute   gap-2    w-[100px] h-[50px]   flex lg:gap-4 items-center  justify-center lg:w-[120px] lg:h-[50px] rounded-3xl bg-[#ffffff4b] text-white">
            <img className="" src="/assets/icon-play.svg" alt="icon-play" />
            <h1 className="text-white font-bold">Play</h1>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row font-bold text-[10px] md:text-[20px] text-[#c3c4c7] gap-2 items-center ">
            <p>{e.year}</p>
            <span className="w-[5px] h-[5px] bg-white rounded-full" />
            {e.category === "Movie" ? <Film /> : <Tv />}
            <p>{e.category}</p>
            <span className="w-[5px] h-[5px] bg-white rounded-full" />
            <p>{e.rating}</p>
          </div>
          <h1 className="text-white font-bold">{e.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
