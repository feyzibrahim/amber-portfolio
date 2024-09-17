import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dialog, DialogContent } from "./ui/dialog";
import Image from "next/image";
import Link from "next/link";

interface Props {
	index: number;
	article: {
		src: string;
		type: string | "YouTube" | "Uploaded" | "Apple Podcast" | "Spotify";
		img?: string;
	};
}

export default function Video({ index, article }: Props) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.01,
	});

	const [isModalOpen, setModalOpen] = useState(false); // Modal state

	// Animation variants for each article
	const articleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1,
				duration: 0.5,
			},
		}),
	};

	return (
		<>
			<motion.div
				ref={ref}
				key={index}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				custom={index}
				variants={articleVariants}
				className="z-30 hover:text-primary duration-300 cursor-pointer shadow-md"
				onClick={() => article.type !== "Podcast" && setModalOpen(true)} // Open modal on click
			>
				{article.type === "YouTube" && (
					<iframe src={article.src} className="w-full h-full rounded"></iframe>
				)}

				{article.type === "Uploaded" && (
					<video
						controls
						muted // Mute the video
						autoPlay // Automatically play the video
						loop // Loop the video
						className="rounded"
					>
						<source src={article.src} type="video/mp4" />
					</video>
				)}

				{article.type === "Podcast" && article.img && (
					<Link href={article.src} target="_blank">
						<Image
							src={article.img}
							alt=""
							width={958}
							height={541}
							className="rounded md:h-48 w-full object-cover"
						/>
					</Link>
				)}
			</motion.div>

			{/* Modal for enlarged video */}
			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="bg-background-secondary border-none p-10 max-w-[70%]">
					<div className="relative">
						<video
							src={article.src}
							controls
							autoPlay
							className="w-full h-auto"
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
