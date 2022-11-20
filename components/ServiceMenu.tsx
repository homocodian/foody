import { Fragment } from "react";
import Link from "next/link";

import { getSearchState } from "@/utilities/context/searchContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function ServiceMenu() {
	const { setSearchStateActive, activeCategory } = getSearchState();
	return (
		<div>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button
						className={`inline-flex justify-center w-full px-4 py-2`}
					>
						Services
						<ChevronDownIcon
							className="w-5 h-5 ml-2 -mr-1 text-gray"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute z-50 md:-right-[50%] w-56 mt-4 origin-top-right bg-white divide-y divide-light-gray rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								<Link
									href={"/#what-we-serve"}
									className={`capitalize hover:bg-primary hover:text-primary-lighter group flex rounded-md items-center w-full px-2 py-2 text-sm hover:cursor-pointer`}
								>
									What we serve
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									href={`/menu?category=${activeCategory}`}
									onClick={() => setSearchStateActive(false)}
									className={`capitalize hover:bg-primary hover:text-primary-lighter group flex rounded-md items-center w-full px-2 py-2 text-sm hover:cursor-pointer`}
								>
									Order food
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									href={"/locations"}
									className={`capitalize hover:bg-primary hover:text-primary-lighter group flex rounded-md items-center w-full px-2 py-2 text-sm hover:cursor-pointer`}
								>
									We deliver to
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									href={"/restaurants"}
									className={`capitalize hover:bg-primary hover:text-primary-lighter group flex rounded-md items-center w-full px-2 py-2 text-sm hover:cursor-pointer`}
								>
									Restaurants
								</Link>
							</Menu.Item>
							<Menu.Item>
								<Link
									href={"/refund"}
									className={`capitalize hover:bg-primary hover:text-primary-lighter group flex rounded-md items-center w-full px-2 py-2 text-sm hover:cursor-pointer`}
								>
									Refund &amp; Cancellation
								</Link>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

export default ServiceMenu;
