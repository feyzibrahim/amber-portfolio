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
			src: "https://www.youtube.com/watch?v=4H0Cujqurk0&t=61s",
			type: "YouTube",
			title: "Smart Data Solutions and Basys.AI Partner for a Smarter, More Efficient Prior Authorization Process",
			loc: "Smart Horizons HealthTech Symposium 2024",
			img: "/thumb/smart.jpg",
		},
		{
			src: "https://drive.google.com/file/d/1DYOpbF7mIWOGeGiMf_hdWKsdyPo8fD71/preview",
			type: "Drive",
			title: "Aligning incentives among key stakeholders of healthcare",
			loc: "TEDx",
			img: "/thumb/tedx.webp",
		},
		{
			src: "https://drive.google.com/file/d/1Q03vavk352sFN4cNYWEVzHPOs-2OkOwQ/preview",
			type: "Drive",
			title: "Mayo Clinic Platform_Accelerate: basys.ai",
			loc: "Mayo Clinic Platform",
			img: "/thumb/mayo.webp",
		},
		{
			src: "https://drive.google.com/file/d/1pppVvDRjBNw8i1xZdHVGiBiThXMNVVJY/preview",
			type: "Drive",
			title: "Halcyon 2024 Health Showcase",
			loc: "Halcyon",
			img: "/thumb/halcyon.png",
		},

		{
			src: "https://drive.google.com/file/d/1ZR9oe225H0lUzsKt0vP5NXlNQnlBx6jv/preview",
			type: "Drive",
			title: "2023 SICI Showcase",
			loc: "Harvard University",
			img: "/thumb/sici.png",
		},
		{
			src: "https://drive.google.com/file/d/1vK2JW087TFZGOQ-XKRjSlv6G-x6zK4R5/preview",
			type: "Drive",
			title: "Mayo Foundation for Medical Education and Research",
			loc: "Mayo Clinic Platform",
			img: "/thumb/maya_clinic.png",
		},

		{
			src: "https://podcasts.apple.com/us/podcast/bringing-artificial-intelligence-into-prior-authorization/id1485735357?i=1000669672537",
			type: "Podcast",
			img: "/podcast/stratgy.webp",
			title: "Bringing artificial intelligence into prior authorization processes",
			loc: "Healthcare Strategies",
		},
		{
			src: "https://podcasts.apple.com/fr/podcast/can-ai-align-incentives-in-healthcare-basys-ai-ceo/id1760505254?i=1000669245124",
			type: "Podcast",
			img: "/podcast/theory.webp",
			title: "Can AI Align Incentives in Healthcare?",
			loc: "The Healthcare Theory Podcast",
		},
		{
			src: "https://open.spotify.com/episode/5omEkOwR0DNuaAuVKVgZas",
			type: "Podcast",
			img: "/podcast/next-in-time.png",
			title: "Redefining Healthcare",
			loc: "Next In Time",
		},
		{
			src: "https://www.youtube.com/embed/JotFXZFmAO4?autoplay=1&mute=1",
			type: "YouTube",
			title: "Data Scientist Raises $2.4M to Automate Healthcare Authorizations and Reimbursements",
			loc: "The SaaS CFO",
			img: "/thumb/saas.png",
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
		<div className="space-y-5">
			<motion.h1
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold ${outfit.className}`}
			>
				Featured In
			</motion.h1>

			<motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`${outfit.className} text-foreground-secondary`}
			>
				Presented on renowned platforms such as TEDx, and at institutions like the
				Mayo Clinic, Harvard, and MIT.
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{videos.slice(0, visibleVideos).map((article, index) => (
					<Video article={article} index={index} key={index} />
				))}
			</div>

			{/* Show More Button */}
			{visibleVideos < videos.length && (
				<div className="flex justify-center pt-5">
					<button
						onClick={showMoreVideos}
						className="z-30  flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover"
					>
						<Image src="/icons/sparkles.png" alt="" width={18} height={18} />{" "}
						Show More <ArrowRight className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	);
}
