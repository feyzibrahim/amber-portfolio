"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Publication from "./publication";

export default function Publications() {
	// All the articles
	const articles = [
		{
			title: "Forbes Publications",
			link: "https://www.forbes.com/sites/frederickdaso/2022/09/05/two-harvard-students-revolutionize-diabetes-treatment-on-a-regular-basys/",
			src: "/pub/harvard-ai.jpg",
			description:
				"Basys.ai, a Harvard student-founded startup, uses AI to improve diabetes treatment by providing doctors with personalized clinical decision support.",
		},
		{
			title: "The Harvard Gazette",
			link: "https://news.harvard.edu/gazette/story/newsplus/transforming-public-health-through-social-innovation/",
			src: "/pub/transforming.webp",
			description:
				"Amber selected as one of Cheng's fellows at Harvard Kennedy School",
		},
		{
			title: "Harvard T.H Chan",
			link: "https://www.hsph.harvard.edu/news/features/need-help-managing-diabetes-these-students-made-an-app-for-that/",
			src: "/pub/need-help.webp",
			description: "Amber's interview published by Harvard",
		},
		{
			title: "The Business Journals",
			link: "https://www.bizjournals.com/boston/inno/stories/news/2022/10/04/ai-startup-from-harvard-innovation-labs-launches.html",
			src: "/pub/ai-startup.webp",
			description: "Boston Business Journal covers the launch of basys.ai",
		},
		{
			title: "NASDAQ",
			link: "https://www.nasdaq.com/articles/amber-nigam%3A-improving-metabolic-health-for-billions-through-ai",
			src: "/pub/nasdaq.png",
			description: "Nasdaq publishes Amber's story and motivation for starting up",
		},
		{
			title: "MIT News",
			link: "https://news.mit.edu/2020/what-is-covid-19-data-tsunami-telling-policymakers-0701",
			src: "/pub/amber.webp",
			description: "MIT News publishes Amber",
		},
		{
			title: "NYC Daily Post",
			link: "https://nycdailypost.com/2022/06/16/health/amber-nigam-boston-congress-of-public-health-40-under-40-winner/",
			src: "/pub/nyc.webp",
			description: "Amber awarded 40 under 40 and published by NYC Daily Post",
		},
		{
			title: "YOURSTORY",
			link: "https://yourstory.com/2022/08/basys-ai-harvard-healthtech-startup-india-ayushman-bharat",
			src: "/pub/yourstory.avif",
			description: "YourStory covers basys.ai's India debut",
		},
	];

	const [isSliding, setIsSliding] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);

	// Function to handle scroll to the next section
	const handleNext = () => {
		if (carouselRef.current && !isSliding) {
			setIsSliding(true);
			carouselRef.current.scrollBy({
				left: carouselRef.current.offsetWidth,
				behavior: "smooth",
			});
			setTimeout(() => setIsSliding(false), 500); // Delay to match scroll time
		}
	};

	// Function to handle scroll to the previous section
	const handlePrev = () => {
		if (carouselRef.current && !isSliding) {
			setIsSliding(true);
			carouselRef.current.scrollBy({
				left: -carouselRef.current.offsetWidth,
				behavior: "smooth",
			});
			setTimeout(() => setIsSliding(false), 500);
		}
	};

	return (
		<div className="relative">
			<div className="py-10">
				{/* Carousel */}
				<motion.div
					ref={carouselRef}
					className="flex flex-1 gap-5 overflow-x-scroll overflow-y-hidden hide-scrollbar scroll-smooth"
					transition={{ duration: 0.5 }}
				>
					{articles.map((article, index) => (
						<Publication publication={article} index={index} key={index} />
					))}
				</motion.div>
			</div>

			{/* Left and Right buttons */}
			<button
				onClick={handlePrev}
				className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 p-2"
			>
				<svg
					width="18"
					height="60"
					viewBox="0 0 18 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.262472 30.4799C0.0989237 30.1809 0.0989238 29.8191 0.262472 29.5201L16.1227 0.523331C16.6195 -0.385056 18 -0.0321884 18 1.0032L18 58.9968C18 60.0322 16.6195 60.3851 16.1227 59.4767L0.262472 30.4799Z"
						fill="white"
					/>
				</svg>
			</button>
			<button
				onClick={handleNext}
				className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 p-2"
			>
				<svg
					width="18"
					height="60"
					viewBox="0 0 18 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.7375 29.5201C17.9011 29.8191 17.9011 30.1809 17.7375 30.4799L1.87734 59.4767C1.38049 60.3851 0 60.0322 0 58.9968L0 1.0032C0 -0.0321836 1.38049 -0.385057 1.87734 0.523327L17.7375 29.5201Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	);
}
