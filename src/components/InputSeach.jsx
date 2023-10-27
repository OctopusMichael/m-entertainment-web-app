"use client";
import React  from "react";
import { Search } from "lucide-react";
import useStore from "@/hooks/useStore";

const InputSeach = () => {
  const setSearchValue = useStore((state) => state.setSearchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form
      id="form"
      className=" mt-[20px] lg:mt-[0px]  flex flex-row gap-3 items-center justify-center  "
    >
      <Search className="text-white" />
      <input
        onChange={handleChange}
        id="inputSerch"
        placeholder="Search for Movies or TV series"
        type="text"
        className=" caret-red  w-screen outline-none bg-darkBlue text-white "
        autoComplete="off"
      />
    </form>
  );
};

export default InputSeach;
