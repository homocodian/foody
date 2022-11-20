import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { PlayIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";

import Layout from "../components/Layout";
import CustomerReviews from "../components/CustomerReviews";

import ToastImage from "../public/images/bread.jpg";
import ShoppingImage from "../public/images/shopping.svg";
import DeliveryImage from "../public/images/delivery_on_the_way.svg";
import BestQualityImage from "../public/images/best quality.svg";

const Home: NextPage = () => {
	return (
		<Layout title="Home" attachNavbar={true} attachFooter={true}>
			<main>
				{/* first panel */}
				<div
					id="info-panel"
					className="py-16 px-8 grid place-items-center grid-cols-1 md:grid-cols-2 gap-12 md:gap-0"
				>
					{/* info panel */}
					<div className="relative">
						<span className="bg-primary-light text-primary px-6 py-2 rounded-full">
							More than faster
						</span>
						<h1 className="text-6xl font-inter font-black mt-12 mb-8">
							Be the fastest in delivering your{" "}
							<span className="text-primary">Food</span>
						</h1>
						<p className="md:max-w-[25ch] lg:max-w-lg">
							our job is to fill your tummy with delicious food and with fast
							and free delivery.
						</p>

						{/* actions */}
						<div className="flex flex-col sm:flex-row items-center gap-4 my-6">
							<Link
								href="/menu"
								className="bg-primary text-white px-6 py-3 rounded-full tracking-wider hover:bg-primary-dark"
							>
								Get Started
							</Link>
							<button className="flex items-center gap-2 px-4 py-4 hover:bg-primary-light hover:rounded-full">
								<PlayIcon className="w-6 h-6 text-yellow" />
								<span>watch videos</span>
							</button>

							{/* floating button */}
							<div className="flex items-center gap-4 px-4 py-2 bg-white shadow-md rounded-full cursor-pointer z-[1000] md:absolute md:bottom-28 md:-right-24 lg:-right-40 xl:-right-48 2xl:-right-56;">
								<div className="bg-yellow rounded-full">👮</div>
								<div className="text-xs">
									<p>James</p>
									<p className="text-slate">Food courior</p>
								</div>
								<div className="px-px py-px bg-primary rounded-full ml-1 cursor-pointer hover:bg-primary-dark">
									<PhoneIcon className="px-1 py-1 w-6 h-6 text-white" />
								</div>
							</div>
						</div>

						{/* customers reviews */}
						<CustomerReviews />
					</div>

					<div className="relative">
						<div className="relative overflow-hidden md:mt-6 w-80 h-80 rounded-full bg-primary after:content-[url('/images/women_holding_food.png')] poster"></div>
						<div className="inline-block bg-yellow px-2 py-2 rounded-lg absolute top-0 left-2 -rotate-12">
							<ClockIcon className="text-white h-8 w-8" />
						</div>
						<div
							style={{ zIndex: 1000 }}
							className="flex flex-row gap-4 bg-white px-2 py-2 rounded-lg shadow-md w-max absolute -bottom-4 right-0"
						>
							<Image
								src={ToastImage}
								alt="toast bread"
								placeholder="blur"
								width={48}
								height={48}
								className="rounded-xl h-12"
							/>
							<div>
								<p>Blueberry Toast</p>
								<p>
									<span className="text-primary font-bold">$</span> 5.47
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* second panel */}
				<div id="what-we-serve">
					<h2 className="text-primary text-center text-xs uppercase">
						What we serve
					</h2>
					<h3 className="text-center text-2xl m-auto my-4 font-black font-inter max-w-xs md:max-w-md md:text-4xl">
						Your Favourite Food Delivery Partner
					</h3>
					<div className="flex flex-col items-center justify-center sm:justify-around gap-16 mx-8 my-8 features">
						<div>
							<Image
								src={ShoppingImage}
								blurDataURL={
									"iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAASElEQVR42u3PQREAMAgAoFlrlUxjVBuYwa8HDYifXe+AEBERERERERERERERERERERERERERERERERERERERERERERERERHZGAMOa9Hu53LTAAAAAElFTkSuQmCC"
								}
								alt="easy order"
								width={192}
								height={192}
							/>
							<p className="text-center my-8 tracking-wider">Easy To Order</p>
						</div>
						<div>
							<Image
								src={DeliveryImage}
								blurDataURL={
									"iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAASElEQVR42u3PQREAMAgAoFlrlUxjVBuYwa8HDYifXe+AEBERERERERERERERERERERERERERERERERERERERERERERERERHZGAMOa9Hu53LTAAAAAElFTkSuQmCC"
								}
								alt="easy delivery"
								width={192}
								height={192}
							/>
							<p className="text-center my-8 tracking-wider">
								Fastest Delivery
							</p>
						</div>
						<div>
							<Image
								src={BestQualityImage}
								blurDataURL={
									"iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAASElEQVR42u3PQREAMAgAoFlrlUxjVBuYwa8HDYifXe+AEBERERERERERERERERERERERERERERERERERERERERERERERERHZGAMOa9Hu53LTAAAAAElFTkSuQmCC"
								}
								alt="best quality"
								width={192}
								height={192}
							/>
							<p className="text-center my-8 tracking-wider">Best Quality</p>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Home;
