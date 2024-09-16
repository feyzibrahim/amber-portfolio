"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Publication from "./publication";
import { ArrowRight, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";

export default function Publications() {
	// All the articles
	const articles = [
		{
			title: "Forbes",
			year: "2020",
			src: "/pub/forbes.png",
			link: "https://www.forbes.com/sites/frederickdaso/2022/09/05/two-harvard-students-revolutionize-diabetes-treatment-on-a-regular-basys/",
			description:
				"Long-term management of metabolic and chronic diseases represents the largest cost burden on the U.S. healthcare system. Founded in June 2021, basys.ai is a B2B SaaS platform that supports clinical decision-making for doctors using deep learning algorithms. ",
		},
		{
			title: "The Harvard Gazette",
			year: "2022",
			src: "/pub/harvard.png",
			link: "https://news.harvard.edu/gazette/story/newsplus/transforming-public-health-through-social-innovation/",
			description:
				"Amber Nigam, SM '23, co-founded the tech start-up basys.ai with Jie Sun, SM '22. The company's software tool uses artificial intelligence to track, predict, and intervene in the health of patients with diabetes. “Our goal is to impact as many people as possible,” Nigam said.",
		},
		{
			title: "Harvard T.H Chan",
			year: "2022",
			src: "/pub/harvard-chan.png",
			link: "https://www.hsph.harvard.edu/news/features/need-help-managing-diabetes-these-students-made-an-app-for-that/",
			description:
				"Amber Nigam, SM '23, aims to help people with diabetes feel as though they're living without it. As a co-founder of basys.ai, a tech startup, he developed an easy-to-use app that allows diabetes patients to track their blood glucose levels, activities, diet, and more. ",
		},
		{
			title: "The Business Journals",
			year: "2022",
			src: "/pub/tbj.png",
			link: "https://www.bizjournals.com/boston/inno/stories/news/2022/10/04/ai-startup-from-harvard-innovation-labs-launches.html",
			description:
				"A newly launched tech company, founded by two Harvard T.H. Chan School of Public Health students, uses AI to predict and improve outcomes for patients with metabolic health diseases. Their approach aims to enhance patient care and optimize treatment strategies.",
		},
		{
			title: "NASDAQ",
			year: "2022",
			src: "/pub/nasdaq.png",
			link: "https://www.nasdaq.com/articles/amber-nigam%3A-improving-metabolic-health-for-billions-through-ai",
			description:
				"Hey, guys! It's Spiffy, and I'm back again on Planet Earth with an eye out for entrepreneurs making a difference in the world! I have another great interview for you this week. Today, I'm excited to speak with Amber Nigam, the co-founder and CEO of basys.ai. Let's see what inspiring work he's been up to.",
		},
		{
			title: "MIT News",
			year: "2020",
			src: "/pub/mit.png",
			link: "https://news.mit.edu/2020/what-is-covid-19-data-tsunami-telling-policymakers-0701",
			description:
				"Amber Nigam, a data scientist based in New Delhi, India, has watched conspiracy theories spread and multiply on social media as contagiously as Covid-19 itself. “There's a lot of anxiety,” he says. “Even my parents have shown me news on WhatsApp and asked if it was true.”",
		},
		{
			title: "NYC Daily Post",
			year: "2022",
			src: "/pub/nyc.png",
			link: "https://nycdailypost.com/2022/06/16/health/amber-nigam-boston-congress-of-public-health-40-under-40-winner/",
			description:
				"The inaugural 40 Under 40 Public Health Catalyst Awards aim to highlight the rising leaders and innovators of the public health field. The Boston Congress of Public Health (BCPH) and the HPHR Journal selected a group of “leaders, entrepreneurs, researchers, scientists, activists”, and doctors",
		},
		{
			title: "YOURSTORY",
			year: "2022",
			src: "/pub/yourstory.png",
			link: "https://yourstory.com/2022/08/basys-ai-harvard-healthtech-startup-india-ayushman-bharat",
			description:
				"basys.ai, a healthtech startup, spun out of Harvard, is looking to launch its services in India in a few months. It uses its proprietary AI technology to track, predict and provide interventions to improve treatment outcomes for better metabolic health.",
		},
		{
			title: "NASDAQ",
			year: "2022",
			src: "/pub/nasdaq.png",
			link: "https://www.nasdaq.com/articles/amber-nigam%3A-improving-metabolic-health-for-billions-through-ai",
			description:
				"Hey, guys! It's Spiffy, and I'm back again on Planet Earth with an eye out for entrepreneurs making a difference in the world! I have another great interview for you this week. Today, I'm excited to speak with Amber Nigam, the co-founder and CEO of basys.ai. Let's see what inspiring work he's been up to.",
		},
	];

	const [isSliding, setIsSliding] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);
	const carouselRef2 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (carouselRef.current) {
			const carouselWidth = carouselRef.current.scrollWidth;
			const visibleWidth = carouselRef.current.offsetWidth;

			// Calculate the center position
			const centerPosition = (carouselWidth - visibleWidth) / 2;

			// Scroll to center position
			carouselRef.current.scrollTo({
				left: centerPosition,
				behavior: "smooth",
			});
		}
	}, []);

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

	const [visibleArticles, setVisibleArticles] = useState(4); // Initially show 4 articles

	// Function to load more articles
	const showMoreArticles = () => {
		setVisibleArticles((prev) => prev + 4); // Show 4 more articles
	};

	return (
		<div>
			<div className="relative hidden md:block">
				<motion.div
					ref={carouselRef}
					transition={{ duration: 0.5 }}
					className="py-10 overflow-x-scroll overflow-y-hidden hide-scrollbar scroll-smooth"
				>
					{/* Carousel */}
					<div className="flex gap-5 p-5">
						{articles.slice(0, 4).map((article, index) => (
							<Publication
								publication={article}
								index={index}
								key={index}
							/>
						))}
					</div>
					<div className="flex justify-center gap-5 p-5">
						{articles.slice(4).map((article, index) => (
							<Publication
								publication={article}
								index={index}
								key={index}
							/>
						))}
					</div>
				</motion.div>

				{/* Left and Right buttons */}
				<button
					onClick={handlePrev}
					className="absolute left-5 md:left-20 top-1/2 transform -translate-y-1/2 p-2 z-30"
				>
					<CircleChevronLeft className="w-8 h-8" />
				</button>
				<button
					onClick={handleNext}
					className="absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 p-2 z-30"
				>
					<CircleChevronRight className="w-8 h-8" />
				</button>
			</div>
			<motion.div
				ref={carouselRef2}
				transition={{ duration: 0.5 }}
				className="py-10 md:hidden"
			>
				{/* Carousel */}
				<div className="px-5 space-y-5">
					{articles.slice(0, visibleArticles).map((article, index) => (
						<Publication publication={article} index={index} key={index} />
					))}
				</div>
				{visibleArticles < articles.length && (
					<div className="flex justify-center mt-10">
						<button
							onClick={showMoreArticles}
							className="z-30 flex items-center gap-2 text-primary underline underline-offset-4 hover:text-primary-hover"
						>
							<Image
								src="/icons/sparkles.png"
								alt=""
								width={18}
								height={18}
							/>{" "}
							Show More <ArrowRight className="w-5 h-5" />
						</button>
					</div>
				)}
			</motion.div>
			<Image
				src="/circle/light4.png"
				alt=""
				width={843}
				height={964}
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			/>
			<Image
				src="/circle/light5.png"
				alt=""
				width={843}
				height={964}
				className="absolute bottom-0 right-0 z-0"
			/>
			<Image
				src="/circle/light6.png"
				alt=""
				width={843}
				height={964}
				className="absolute top-0 left-0 z-0"
			/>
		</div>
	);
}
