import { useState } from 'react';
import Link from 'next/link';
import Cards from '../Cards';

const Product = () => {
	const [selectedSize, setSelectedSize] = useState('S');

	const productDetails = {
		name: 'TIED GREEN V-NECK SHIRT',
		price: '$67',
		desc: 'V-neck shirt with lapel collar. Long sleeves with cuffs. Front tie at hem, Front button closure.',
		size: ['S', 'M', 'L'],
	};

	return (
		<div className="grid grid-cols-3 mb-20 opacity-0">
			<div className="col-start-1 col-end-3 ml-16 mt-24">
				<div className="text-7xl font-bold w-1/2 leading-snug">
					TIED GREEN V&#8209;NECK SHIRT
				</div>
				<div className="my-7 text-5xl">{productDetails.price}</div>
				<div className="ubuntu text-xl leading-relaxed w-2/3">
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
				{/* Product Cards  */}
				<Cards />
			</div>
		</div>
	);
};

export default Product;
