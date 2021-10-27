import { useState } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/section/Navbar';
import Product from '../components/section/Product';
import LandingPage from '../components/section/LandingPage';

export default function Index() {
	const onClickHandler = () => {
		gsap.to('.add', { opacity: 0 });
		gsap.to('.product-title', { translateY: '-200' });

		gsap.to('.p-image', { translateX: 400 });
		gsap.to('.p-image', { translateX: 400 });
		gsap.to('.circle1', { translateX: 400 });
		gsap.to('.circle2', { translateX: 420 });

		gsap.to('.socials', { opacity: 0, translateX: 50 });
	};

	return (
		<>
			<Navbar />
			<LandingPage onClickHandler={onClickHandler} />
			{/* <Product /> */}
		</>
	);
}
