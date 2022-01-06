import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

interface IProps {
  src: string;
  reviewStar: number;
  reviews: number;
  likes: number | undefined;
}

function RestaurantCard({ src, reviewStar, reviews, likes }: IProps) {
  return (
    <div className="relative ring-1 ring-primary rounded hover:shadow-lg">
      <Image
        priority
        layout="responsive"
        width={1290}
        height={1080}
        objectFit="cover"
        src={src}
        alt=""
      />
      <div className="m-2 flex flex-col">
        <p className="inline-flex items-center gap-1 text-sm">
          <StarIcon className="h-5 w-5 text-yellow" />
          <span className="text-dim-gray">{reviewStar}</span>
          <span className="text-dim-gray">{`(${reviews}k Reviews)`}</span>
        </p>
        <p className="inline-flex items-center gap-1">
          <HeartIcon className="w-5 h-6 text-danger" />
          <span className="text-dim-gray">{likes}</span>
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
