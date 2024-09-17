"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MoveRight, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
	const [isFocused, setIsFocused] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Parent variants for staggered animation
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Stagger by 200ms for more smooth animation
			},
		},
	};

	// Child animation variants for individual elements
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={containerVariants}
			className="common-padding grid grid-cols-1 md:grid-cols-6 gap-8 p-8 border-t relative"
		>
			{/* Left Column with Name, Description, and Social Links */}
			<motion.div variants={containerVariants} className="z-10 md:col-span-3">
				<motion.div variants={childVariants} className="flex items-center">
					<h1 className="text-3xl font-semibold ">
						Amber <span className="text-primary">Nigam</span>
					</h1>
				</motion.div>
				<motion.p variants={childVariants} className="text-gray-400 mt-4">
					CEO and Co-founder of{" "}
					<Link
						href="https://www.basys.ai/"
						target="_blank"
						className="text-basys hover:underline hover:text-primary"
					>
						basys.ai.
					</Link>{" "}
					Leading innovations in AI and healthcare.
				</motion.p>

				{/* Input with right arrow */}
				<motion.div
					variants={childVariants}
					className="relative w-full md:w-2/3 mt-5"
				>
					<input
						type="text"
						placeholder="Enter your email"
						className={`p-4 border border-primary w-full rounded-md focus:outline-none ${
							isFocused ? "bg-white text-black" : "bg-transparent"
						} pr-10 z-10`}
						autoComplete="off"
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
					/>
					{/* Right arrow inside the input */}
					<Link
						href="mailto:amber@basys.ai"
						className={`absolute inset-y-0 right-4 flex items-center z-40 hover:text-primary cursor-pointer ${
							isFocused ? "text-black" : "text-current"
						}`}
					>
						<MoveRight />
					</Link>
				</motion.div>

				<motion.p variants={childVariants} className="text-xs pt-5">
					Copyright © 2024 Amber Nigam - All Rights Reserved.
				</motion.p>
			</motion.div>

			{/* Right Column (Form section) */}
			<motion.div className="flex flex-col gap-4 z-10" variants={containerVariants}>
				<motion.div variants={childVariants}>
					<Link
						href=""
						className="duration-300 hover:underline hover:text-primary"
					>
						Home
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#about"
						className="duration-300 hover:underline hover:text-primary"
					>
						About
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#publications"
						className="duration-300 hover:underline hover:text-primary"
					>
						Publications
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#articles"
						className="duration-300 hover:underline hover:text-primary"
					>
						Articles
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="#papers"
						className="duration-300 hover:underline hover:text-primary"
					>
						Papers
					</Link>
				</motion.div>
			</motion.div>

			{/* Contact section */}
			<motion.div className="flex flex-col gap-4 z-10" variants={containerVariants}>
				<motion.p variants={childVariants}>Contact</motion.p>
				<motion.p
					variants={childVariants}
					className="hover:text-primary duration-300 cursor-pointer"
				>
					<Link href="mailto:amber@basys.ai">amber@basys.ai</Link>
				</motion.p>
			</motion.div>

			{/* Social media links */}
			<motion.div className="flex gap-3 z-20" variants={containerVariants}>
				<motion.div variants={childVariants}>
					<Link
						href="https://www.linkedin.com/in/amber-nigam/"
						target="_blank"
						className="text-basys hover:underline z-20 hover:text-primary duration-300"
					>
						<Linkedin />
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="https://x.com/AmBeRnIgAm"
						target="_blank"
						className="text-basys hover:underline z-20 hover:text-primary duration-300"
					>
						<Twitter />
					</Link>
				</motion.div>
				<motion.div variants={childVariants}>
					<Link
						href="https://www.instagram.com/amber.nigam"
						target="_blank"
						className="text-basys hover:underline z-20 hover:text-primary duration-300"
					>
						<Instagram />
					</Link>
				</motion.div>
			</motion.div>

			{/* Decorative Images */}
			<Image
				src="/circle/light8.png"
				alt=""
				width={843}
				height={964}
				className="absolute bottom-0 left-0 z-0 hide-on-light-mode"
			/>
			<Image
				src="/circle/circles.png"
				alt=""
				width={843}
				height={964}
				className="absolute bottom-0 right-0 z-0"
			/>
		</motion.div>
	);
}
