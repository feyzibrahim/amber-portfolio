"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
			className="common-style flex flex-col gap-8 items-center text-center border-b"
		>
			<div className="absolute top-0 w-full bg-background-secondary h-1/2 -z-10"></div>

			{/* Title with staggered animation */}
			<motion.h1
				className={`text-3xl md:text-5xl font-bold`}
				variants={childVariants}
			>
				Amber Nigam
			</motion.h1>

			{/* Image with staggered animation */}
			<motion.div variants={childVariants} className="md:w-3/12">
				<Image
					className=" shadow-lg"
					src="/amber.png"
					alt="Amber Nigam"
					width={403}
					height={448}
					priority
				/>
			</motion.div>

			{/* Paragraph with staggered animation */}
			<motion.p
				className="md:w-2/3 leading-relaxed tracking-wide"
				variants={childVariants}
			>
				Amber Nigam is the Co-founder and CEO of Basys.ai, a digital health
				startup optimizing healthcare workflows with AI. A Harvard graduate, his
				work in AI and healthcare has been recognized in top conferences and
				journals.
			</motion.p>
		</motion.div>
	);
}
