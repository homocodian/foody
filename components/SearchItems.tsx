import { ResponseItems } from "@/types/ApiDataType";
import { SearchIcon } from "@heroicons/react/solid";
import { useMemo, useState } from "react";
import Card from "./Card";

interface IProps {
  data: ResponseItems;
}

function SearchItems({ data }: IProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchedItem = useMemo(() => {
    if (searchTerm === "") return [];
    else
      return data.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm,data.items]);

  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-6 3xl:px-8">
      <header>
        <h1 className="text-2xl my-2 capitalize">
          Search {data.category} food
        </h1>
      </header>
      <div
        className="inline-flex px-2 my-4 mb-6 justify-center items-center w-full
        rounded border-[1px] border-primary focus-within:shadow-lg"
      >
        <input
          type="text"
          className="w-full outline-none py-2 "
          value={searchTerm}
          placeholder="search..."
          autoFocus
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className="w-5 h-5 text-gray mx-2" />
      </div>
      {searchedItem.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center gap-5 p-px">
          {/* cards */}
          {searchedItem.map((item) => {
            return <Card key={item.productId} item={item} />;
          })}
        </div>
      ) : (
        <p className="text-center text-2xl font-semibold text-primary-dark">
          No data found, try searching something different or choose something from above options 😔
        </p>
      )}
    </div>
  );
}

export default SearchItems;
