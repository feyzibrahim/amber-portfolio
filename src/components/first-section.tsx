"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function FirstSection() {
	// useInView for scroll-triggered animation
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: true, // Trigger animation only once
		threshold: 0.1, // Start animation when 10% of the element is visible
	});

	// Parent motion variants with staggered animation for children
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // Stagger animation by 300ms
			},
		},
	};

	// Children motion variants
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	return (
		<motion.div
			ref={ref1} // Attach ref to the motion.div
			variants={containerVariants}
			initial="hidden"
			animate={inView1 ? "visible" : "hidden"} // Only animate when in view
			className="px-5 md:px-40 pt-5 md:py-10 md:min-h-screen relative md:grid grid-cols-1 md:grid-cols-2 gap-0"
		>
			{/* Title with staggered animation */}
			<div className="flex flex-col justify-center gap-5 md:gap-10 z-20">
				<motion.h1
					className={`text-3xl md:text-5xl font-bold text-foreground z-20`}
					variants={childVariants}
				>
					Amber Nigam
				</motion.h1>
				<motion.p className="text-foreground  z-20" variants={childVariants}>
					Amber Nigam is the co-founder and CEO of basys.ai, a digital health
					startup optimizing healthcare workflows with AI. A Harvard graduate,
					his work in AI and healthcare has been recognized in top conferences
					and journals.
				</motion.p>
			</div>
			{/* Image with staggered animation */}
			<motion.div
				variants={childVariants}
				className="flex items-center justify-center mt-2 md:mt-0"
			>
				<Image
					src="/amber_g.png"
					alt="Amber Nigam"
					width={403}
					height={448}
					priority
					className="z-10"
				/>
			</motion.div>
			<Image
				src="/circle/light1.png"
				alt=""
				width={843}
				height={964}
				className="absolute top-0 right-0 z-0 hide-on-light-mode"
			/>
			<Image
				src="/circle/light2.png"
				alt=""
				width={843}
				height={964}
				className="absolute top-0 -left-0 z-10 hide-on-light-mode"
			/>

			{/* Paragraph with staggered animation */}
		</motion.div>
	);
}
