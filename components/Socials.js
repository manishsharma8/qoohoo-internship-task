import { useRef, useEffect } from 'react';
import Image from 'next/image';

const Socials = ({}) => {
	const el = useRef();

	const socials = ['facebook.png', 'twitter.png', 'instagram.png'];
	return (
		<div ref={el} className="flex gap-2">
			{socials.map((social) => {
				return (
					<button className="social-button border-2 border-gray-300 px-2 pt-2 pb-1 rounded-lg hover:border-gray-500">
						<Image
							src={`/images/${social}`}
							className=""
							quality="100"
							alt="Picture of the author"
							width={20}
							height={20}
						/>
					</button>
				);
			})}
		</div>
	);
};

export default Socials;
