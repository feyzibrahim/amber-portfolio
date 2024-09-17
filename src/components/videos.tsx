"use client";
import { outfit } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Video from "./video";

export default function FeaturedVideos() {
	// All the videos
	const videos = [
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/tedx.mp4",
			type: "Uploaded",
		},
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Halcyon+Fellowship+-+Halcyon+2024+Health+Showcase+%233.mp4",
			type: "Uploaded",
		},
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Mayo+Clinic+%232.mp4",
			type: "Uploaded",
		},
		{
			src: "https://amber-nigam-website-files.s3.us-west-2.amazonaws.com/Cheng+Fellowship+%233.mp4",
			type: "Uploaded",
		},
		{
			src: "https://www.youtube.com/embed/JotFXZFmAO4?autoplay=1&mute=1&controls=0",
			type: "YouTube",
		},
		{
			src: "https://podcasts.apple.com/us/podcast/bringing-artificial-intelligence-into-prior-authorization/id1485735357?i=1000669672537",
			type: "Podcast",
			img: "/podcast/stratgy.webp",
		},
		{
			src: "https://podcasts.apple.com/fr/podcast/can-ai-align-incentives-in-healthcare-basys-ai-ceo/id1760505254?i=1000669245124",
			type: "Podcast",
			img: "/podcast/theory.webp",
		},
		{
			src: "https://open.spotify.com/episode/5omEkOwR0DNuaAuVKVgZas",
			type: "Podcast",
			img: "/podcast/next.webp",
		},
	];

	const [visibleVideos, setVisibleVideos] = useState(6); // Initially show 6 videos

	// Function to load more videos
	const showMoreVideos = () => {
		setVisibleVideos((prev) => prev + 6); // Show 6 more videos
	};

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div className="py-10 space-y-3">
			{/* <motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-primary uppercase text-center ${outfit.className}`}
			>
				Featured
			</motion.p> */}
			<motion.h1
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold text-center ${outfit.className}`}
			>
				Featured In
			</motion.h1>

			<motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-center ${outfit.className} md:w-2/3 mx-auto text-foreground-secondary`}
			>
				Featured insightful videos and podcasts on AI-driven healthcare
				innovations, entrepreneurship, and leadership.
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{videos.slice(0, visibleVideos).map((article, index) => (
					<Video article={article} index={index} key={index} />
				))}
			</div>

			{/* Show More Button */}
			{visibleVideos < videos.length && (
				<div className="flex justify-center pt-5">
					<button
						onClick={showMoreVideos}
						className="z-30 flex items-center gap-2 text-primary underline underline-offset-4 hover:text-primary-hover"
					>
						<Image src="/icons/sparkles.png" alt="" width={18} height={18} />{" "}
						Show More <ArrowRight className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	);
}
