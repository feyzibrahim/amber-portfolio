"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	// Parent variants for staggering children animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // 0.3 seconds delay between each item
			},
		},
	};

	// Child variants for individual items animation
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div
			ref={ref1}
			initial="hidden"
			animate={inView1 ? "visible" : "hidden"}
			variants={containerVariants} // Parent container to stagger children
			className="common-style relative grid grid-cols-1 md:grid-cols-2 gap-5"
			id="about"
		>
			{/* Left side: image */}
			<motion.div
				variants={childVariants}
				className="z-10 flex items-center justify-center"
			>
				<Image
					src="/icons/basys.png"
					alt="basys.ai logo"
					width={950}
					height={955}
					className="w-2/3"
				/>
			</motion.div>

			{/* Right side: text and stats */}
			<motion.div className="md:text-right flex flex-col justify-center gap-5">
				<motion.p variants={childVariants} className="text-primary">
					About
				</motion.p>

				<motion.h1 variants={childVariants} className="text-3xl font-bold">
					CEO and founder of <span className="text-primary">basys.ai</span>
				</motion.h1>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					With a background rooted in healthcare, AI, and entrepreneurship, and
					14 years of experience in these fields. He holds a bachelor's degree
					in Computer Science and a master's degree in Health Data Science from
					Harvard.
				</motion.p>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					Actively involved in both the entrepreneurship and academic
					communities, his work has been recognized with multiple fellowships,
					including the Cheng Fellowship and Halcyon Fellowship.
				</motion.p>

				{/* Stats */}
				<motion.div
					variants={containerVariants}
					className="flex justify-end gap-5 text-left"
				>
					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">14+</h1>
						<p>Years of experience</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">11</h1>
						<p>Papers Published</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">2 M+</h1>
						<p>Funds Raised</p>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Background image */}
			<Image
				src="/circle/light3.png"
				alt=""
				width={843}
				height={964}
				className="absolute md:left-10 -top-20 md:top-1/3 transform md:-translate-y-1/2 z-0 hide-on-light-mode"
			/>
		</motion.div>
	);
}
