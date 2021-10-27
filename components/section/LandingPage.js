import { useRef } from 'react';
import Box from '../Box';
import Socials from '../Socials';
import Product from './Product';

const LandingPage = ({ onClickHandler }) => {
	const el = useRef();
	return (
		<div className="grid grid-cols-5 relative" ref={el}>
			<div className="product absolute ml-16 w-1/3 top-72 z-10">
				<div className="product-title text-7xl font-bold leading-snug -translate-y-10">
					TIED GREEN V&#8209;NECK SHIRT
				</div>
			</div>
			<div className="absolute w-1/3 ml-16 top-72">
				<Product />
			</div>
			<div className="socials mt-auto ml-16 mb-5">
				<Socials />
			</div>
			<div
				style={{ backgroundColor: '#faffeb' }}
				className="circle1 w-1/3 h-3/5 scale-125 top-36 left-1/4 absolute rounded-full"
			></div>
			<div
				style={{ backgroundColor: '#eff4dd' }}
				className="circle2 w-1/3 h-3/5 scale-110 top-36 left-1/4 translate-x-4 absolute rounded-full"
			></div>
			<div className="col-start-2 col-end-4 relative flex">
				<img
					src={`/images/og-model.png`}
					className="p-image col-start-2 col-end-4 w-4/5 ml-auto"
				/>
				<div className="absolute -right-40 top-40">
					<Box />
				</div>
				<button
					onClick={onClickHandler}
					className="add absolute top-1/2 left-1/2 bg-gray-800 hover:bg-gray-700 rounded-full p-3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 z-10 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				</button>
			</div>
			{/* <div className="absolute top-3/4 right-3/4 w-12 h-12">
				<img className="spin" src="assets/squiggly-line.png" />
			</div> */}
		</div>
	);
};

export default LandingPage;
