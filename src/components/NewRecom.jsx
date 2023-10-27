import Card from "./Card";

const NewRecom = ({ searchValue, completList }) => {
  return (
    <section className="  ">
      <div className="flex flex-col ">
        {searchValue === "" ? (
          <h1 className="text-white text-start text-[24px] md:text-[40px] font-bold ">Movies</h1>
        ) : (
          <h1 className="text-white text-start text-[24px] md:text-[40px] ">
            {`Found  ${completList.length} results for  ${searchValue} `}
          </h1>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[40px] ">
          {completList.map((e, i) => (
           <Card key={i} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewRecom;
