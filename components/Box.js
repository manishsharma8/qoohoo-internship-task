const Box = () => {
	const products = [
		{ name: 'Half Dome Poolover', price: '$87' },
		{ name: 'Half Dome Poolover', price: '$87' },
	];

	return (
		<div className="">
			{products.map((prod) => {
				return (
					<div className="extra-cards opacity-0 w-52 h-40 mt-10 bg-white rounded-2xl p-4 overflow-hidden shadow-2xl relative">
						<div className="ubuntu text-xl w-1/2">{prod.name}</div>
						<div className="ubuntu mt-4 font-bold text-lg">{prod.price}</div>
						<img
							className="absolute w-32 h-32 left-28 top-10 overflow-hidden rotate-45"
							src="images/bag.png"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Box;
