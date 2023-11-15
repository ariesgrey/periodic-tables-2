"use client";

import React, { useState, Fragment } from "react";
import { usePathname } from "next/navigation";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { cx } from "../utils";
import Link from "next/link";

/* Navigation options */
const navigation = [
	{ name: "Dashboard", id: "dashboard", href: "/", icon: "" },
	{ name: "Search", id: "search", href: "/search", icon: "" },
	{
		name: "New Reservation",
		id: "new-reservation",
		href: "/reservations/new",
		icon: "",
	},
	{ name: "New Table", id: "new-table", href: "/tables/new", icon: "" },
];

const Nav = () => {
	/* Get current path - for styling active Link */
	const pathname = usePathname();

	/* Mobile sidebar open/closed state */
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				{/* Mobile sidebar as Dialog */}
				<Dialog
					as="div"
					className="relative z-50 lg:hidden"
					onClose={setSidebarOpen}>
					{/* BG gray overlay transition */}
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-900/80" />
					</Transition.Child>

					{/* Sidebar open/close transition */}
					<div className="fixed inset-0 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full">
							<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
								{/* Close sidebar button */}
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0">
									<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
										<button
											type="button"
											className="-m-2.5 p-2.5"
											onClick={() => setSidebarOpen(false)}>
											{/* Screen reader label */}
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>

								{/* Sidebar component */}
								<div
									id="mobile-sidebar"
									className="flex grow flex-col gap-y-1 bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
									<div className="flex h-20 shrink-0 items-center">
										<span className="text-3xl text-white">Periodic Tables</span>
									</div>

									<div className="w-full border-t border-gray-300" />

									<nav className="flex flex-1 flex-col pt-3">
										<ul role="list" className="-mx-2 space-y-4">
											{navigation.map((item) => (
												<li key={item.name}>
													<Link
														href={item.href}
														id={item.id}
														className={cx(
															pathname === item.href
																? "bg-gray-800 text-white"
																: "text-gray-400 hover:text-white hover:bg-gray-800",
															"group flex gap-x-3 rounded-md p-2 text-lg leading-8 font-semibold"
														)}>
														{/* <item.icon
															className="h-6 w-6 shrink-0"
															aria-hidden="true"
														/> */}
														{item.name}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Desktop static sidebar */}
			<div
				id="desktop-sidebar"
				className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				<div className="flex grow flex-col gap-y-2 bg-gray-900 px-6">
					<div className="flex h-20 shrink-0 items-center">
						<span className="text-4xl text-white">Periodic Tables</span>
					</div>

					<div className="w-full border-t border-gray-300" />

					<nav className="flex flex-1 flex-col pt-4">
						<ul role="list" className="-mx-2 space-y-6">
							{navigation.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										id={item.id}
										className={cx(
											pathname === item.href
												? "bg-gray-800 text-white"
												: "text-gray-400 hover:text-white hover:bg-gray-800",
											"group flex gap-x-3 rounded-md p-2 text-xl leading-8 font-semibold"
										)}>
										{/* <item.icon
											className="h-6 w-6 shrink-0"
											aria-hidden="true"
										/> */}
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>

			{/* Mobile static top navbar */}
			<div className="top-0 z-40 flex items-center gap-x-7 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
				<button
					type="button"
					id="mobile-menu-button"
					className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
					onClick={() => setSidebarOpen(true)}>
					{/* Screen reader label */}
					<span className="sr-only">Open sidebar</span>
					<Bars3Icon className="h-6 w-6" aria-hidden="true" />
				</button>
				{/* Figure out making this current page name */}
				<span className="flex-1 text-xl font-semibold text-white -mt-0.5">
					Dashboard
				</span>
			</div>
		</div>
	);
};

export default Nav;
