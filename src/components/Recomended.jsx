import React,  from "react";
import Card from "./Card";

const Recomended = ({ searchValue, completList }) => {
  

  return (
    <section className=" ">
      <div className="flex flex-col gap-2 ">
        {searchValue === "" ? (
          <h1 className="text-white text-start text-[24px] md:text-[40px] mt-2 font-bold ">
            Recommended for you
          </h1>
        ) : (
          <h1 className="text-white text-start text-[40px] ">
            {`Found  ${completList.length} results for  ${searchValue} `}
          </h1>
        )}

        <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]  lg:gap-[20px]  ">
          {completList.map((e, i) =>
            e.isTrending !== true ? (
              <Card  key={i} e={e}  />
              ) : null
              )}
        </div>
      </div>
    </section>
  );
};

export default Recomended;

{/* <div key={e.title} className=" flex flex-col gap-3 relative overflow-hidden ">
  <picture className="flex justify-center items-center  ">
    <source
      srcSet={e.thumbnail.regular.medium}
      media="(min-width: 640px)"
    />
    <source
      srcSet={e.thumbnail.regular.large}
      media="(min-width: 768px)"
    />
    <img
      className="rounded-3xl hover:scale-150  "
      src={e.thumbnail.regular.small}
      alt={e.title}
    />
  </picture>
    

  <BookmarkComponent isBookmarked={e.isBookmarked} />
  <div className="flex flex-row text-[#c3c4c7] gap-2 items-center ">
    <p>{e.year}</p>
    <span />
    {e.category === "Movie" ? <Film /> : <Tv />}
    <p>{e.category}</p>
    <span />
    <p>{e.rating}</p>
  </div>
  <h1 className="text-white font-bold">{e.title}</h1>
</div> */}