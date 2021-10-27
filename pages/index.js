import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '../components/section/Navbar';
import LandingPage from '../components/section/LandingPage';

export default function Index() {
	useEffect(() => {
		gsap.to('.spin', {
			rotate: '+360',
			duration: 2,
			repeat: -1,
		});

		gsap.to('.extra-cards', {
			translateY: '-40',
			opacity: 1,
			duration: 2,
		});
	}, []);

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

		gsap.to('.spin', {
			rotate: '+360',
			duration: '1',
		});

		gsap.to('.extra-cards', {
			scale: 0,
			opacity: 0,
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
