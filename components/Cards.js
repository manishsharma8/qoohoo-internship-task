import Image from 'next/image';
const Cards = () => {
	const cardsList = ['card1.png', 'card2.png', 'card3.png', 'card4.png'];

	return (
		<div className="flex mt-10 gap-3">
			{cardsList.map((card) => {
				return (
					<Image
						src={`/images/${card}`}
						quality="100"
						className="transform transition origin-top duration-500 motion-safe:hover:scale-150"
						alt="Picture of the author"
						width={130}
						height={200}
					/>
				);
			})}
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10 ml-3 rounded-full p-1 border hover:border-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Cards;
