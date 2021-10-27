import { useState } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/section/Navbar';
import LandingPage from '../components/section/LandingPage';

export default function Index() {
	const onClickHandler = () => {
		const tl = gsap.timeline();
		gsap.to('.add', { opacity: 0 });
		gsap.to('.product-title', { translateY: '-200' });

		gsap.to('.p-image', {
			translateX: 400,
			scale: 1.2,
			transformOrigin: 'top',
		});
		gsap.to('.circle1', { translateX: 400 });
		gsap.to('.circle2', { translateX: 420 });

		gsap.to('.socials', { opacity: 0, translateX: 50 });

		gsap.to('.product-details', {
			display: 'block',
			autoAlpha: 1,
			delay: 0.5,
			translateY: '-10',
		});
	};

	return (
		<>
			<div className="h-screen">
				<Navbar />
				<LandingPage onClickHandler={onClickHandler} />
			</div>
		</>
	);
}
