import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [active, setActive] = useState('WOMAN');

	const Links = [
		{ name: 'NEW', href: '#' },
		{ name: 'SALE', href: '#' },
		{ name: 'MAN', href: '#' },
		{ name: 'WOMAN', href: '#' },
	];

	return (
		<div className="grid grid-cols-2 border-b border-solid border-gray-300 divide-x divide-solid divide-gray-300">
			<div className="flex divide-x divide-solid divide-gray-300">
				<Link href="/" passHref>
					<div className="hamburger p-8 mt-1 cursor-pointer">
						<div className="w-7 h-0.5 bg-gray-700"></div>
						<div className="w-4 h-0.5 mt-2 bg-gray-700"></div>
					</div>
				</Link>
				<div className="p-7">
					<Link href="/" passHref>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</Link>
				</div>
				<ul className="flex pl-7 gap-10">
					{Links.map((link) => {
						return (
							<Link href={link.href} passHref>
								<li
									onClick={() => setActive(link.name)}
									className={`py-7 mt-auto font-bold cursor-pointer text-gray-800 border-b-2 border-solid hover:border-red-500 transition ease-in duration-200 ${
										active === link.name
											? 'border-red-500'
											: 'border-transparent'
									}`}
								>
									{link.name}
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
			<div className="grid grid-cols-5">
				<div className="col-start-1 col-end-4 mx-auto flex p-7">
					<div className="my-auto relative">
						<div className="rounded-full w-3 h-3 right-3 top-0 text-xs absolute bg-red-300"></div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-4 my-auto cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
					<input
						className="bg-transparent outline-none placeholder-gray-900"
						placeholder="SEARCH"
					/>
				</div>
				<div className="p-7 flex col-start-4 col-end-6 ml-auto gap-8 my-auto">
					<Link href="/#" passHref>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
					</Link>
					<Link href="/#" passHref>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-5 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
