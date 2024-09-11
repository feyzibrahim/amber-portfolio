import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
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
				staggerChildren: 0.3, // Stagger by 300ms
			},
		},
	};

	// Child animation variants for individual elements
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	// Form animation as a group
	const formVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={containerVariants}
			className="common-padding grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-background-secondary"
		>
			{/* Left Column with Name, Description, and Social Links */}
			<motion.div variants={childVariants}>
				<h1 className="text-3xl font-semibold">Amber Nigam</h1>
				<p className="text-gray-400 mt-4">
					CEO and Co-founder of{" "}
					<Link
						href="https://www.basys.ai/"
						target="_blank"
						className="text-basys hover:underline"
					>
						basys.ai.
					</Link>{" "}
					Leading innovations in AI and healthcare.
				</p>

				{/* Social Media Links */}
				<motion.div className="flex gap-3 pt-5" variants={childVariants}>
					<Link
						href="https://www.linkedin.com/in/amber-nigam/"
						target="_blank"
						className="text-basys hover:underline"
					>
						<Linkedin />
					</Link>
					<Link
						href="https://x.com/AmBeRnIgAm"
						target="_blank"
						className="text-basys hover:underline"
					>
						<Twitter />
					</Link>
					<Link
						href="https://www.instagram.com/amber.nigam"
						target="_blank"
						className="text-basys hover:underline"
					>
						<Instagram />
					</Link>
				</motion.div>
			</motion.div>

			{/* Right Column (Form section) */}
			<motion.div className="flex flex-col gap-4" variants={formVariants}>
				{/* Form fields as a group */}
				<input
					type="text"
					placeholder="First name"
					className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
				/>
				<input
					type="email"
					placeholder="Enter your email"
					className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
				/>

				<Link href="mailto:amber@basys.ai" className="mx-auto">
					<Button type="submit">Get In Touch</Button>
				</Link>
			</motion.div>
		</motion.div>
	);
}
