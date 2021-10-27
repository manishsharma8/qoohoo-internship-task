import { useState } from 'react';
import Link from 'next/link';
import Cards from '../Cards';

const Product = () => {
	const [selectedSize, setSelectedSize] = useState('S');

	const productDetails = {
		price: '$67',
		desc: 'V-neck shirt with lapel collar. Long sleeves with cuffs. Front tie at hem, Front button closure.',
		size: ['S', 'M', 'L'],
	};

	return (
		<div className="product-details opacity-0 hidden mb-5">
			<div className="my-7 text-5xl">{productDetails.price}</div>
			<div className="ubuntu text-xl leading-relaxed">
				{productDetails.desc}
			</div>
			<div>
				<div className="mt-10 font-bold text-xl">SELECT SIZE</div>
				<ul className="flex gap-6 mt-3">
					{productDetails.size.map((size) => {
						return (
							<li
								onClick={() => setSelectedSize(size)}
								className={`w-14 h-14 cursor-pointer rounded-full flex justify-center border-2 font-bold ${
									selectedSize === size
										? 'border-black text-black'
										: 'text-gray-400'
								}`}
							>
								<div className="my-auto">{size}</div>
							</li>
						);
					})}
					<Link href="#">
						<div className="my-auto text-xl text-gray-500 cursor-pointer">
							SIZE GUIDE
						</div>
					</Link>
				</ul>
			</div>
			<Cards />
		</div>
	);
};

export default Product;
