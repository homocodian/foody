import { ResponseItems } from "@/types/ApiDataType";
import Card from "./Card";

interface IProps {
  data: ResponseItems;
}

function Dishes({ data }: IProps) {
  return (
    <div id={data.category} className="px-5 3xl:px-14">
      <div className="my-5">
        <p className="uppercase font-semibold text-3xl mb-1">{data.category}</p>
        <p className="font-medium text-base">
          Must try our Dishes &amp; Our chef Recommends
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center gap-5 p-px">
        {/* cards */}
        {data.items.map((item) => {
          return <Card key={item.productId} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Dishes;
