import { Item } from "@/types/FoodItem";
import Image from "next/image";

interface IProps {
	item: Item;
}

const Card = ({ item }: IProps) => {
	return (
		<div
			title={item.name}
			className="rounded overflow-hidden shadow-md ring-1 ring-primary 3xl:min-w-[450px]"
		>
			<Image
				priority
				width={1920}
				height={1080}
				src={item.imageUrl}
				alt={item.name}
				className="w-full hover:scale-110 hover:transition hover:ease-in-out duration-300"
			/>
			<div className="px-4 py-4">
				<div className="font-medium text-lg mb-2 truncate text-dim-gray">
					{item.name}
				</div>
				<div className="w-full inline-flex justify-between items-center">
					<p className="text-dim-gray">₹ {item.price}</p>
					<button className="px-4 py-1 text-center bg-primary text-white rounded-full hover:shadow-lg">
						Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
