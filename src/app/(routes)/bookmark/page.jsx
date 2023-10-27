"use client"

import { Frown } from "lucide-react";
import useStore from "@/hooks/useStore";

const BookmarkPage = () => {
  const searchValue = useStore((state) => state.searchValue);
  return (
    <section>
      <div className="flex flex-col gap-2">
        {searchValue === "" ? (
          <h1 className="text-white text-start text-[24px] md:text-[40px] font-bold flex gap-2 items-center ">
            This section need backend database to work
          </h1>
        ) : (
          <h1 className="text-white text-start text-[24px] md:text-[40px] ">
            {` Nothing here `}
          </h1>
        )}
      </div>
    </section>
  );
};

export default BookmarkPage;
