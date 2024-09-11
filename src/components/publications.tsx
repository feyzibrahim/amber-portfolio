"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Publications() {
	// All the articles
	const articles = [
		{
			title: "Forbes Publications",
			link: "https://www.forbes.com/sites/frederickdaso/2022/09/05/two-harvard-students-revolutionize-diabetes-treatment-on-a-regular-basys/",
			src: "/articles/true-north.webp",
			description:
				"Basys.ai, a Harvard student-founded startup, uses AI to improve diabetes treatment by providing doctors with personalized clinical decision support.",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/07/29/the-ai-revolution-in-healthcare-how-legacy-providers-can-adapt/",
			src: "/articles/ai-revolution.webp",
			description:
				"The AI Revolution In Healthcare: How Legacy Providers Can Adapt",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/06/11/evaluating-ai-startups-finding-the-novel-and-necessary-in-all-the-noise/",
			src: "/articles/evaluating-ai.webp",
			description:
				"Evaluating AI Startups: Finding The Novel And Necessary In All The Noise",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/05/15/how-large-language-models-are-putting-skin-in-the-healthcare-game/",
			src: "/articles/how-large.webp",
			description:
				"How Large Language Models Are Putting Skin In The Healthcare Game",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/04/08/state-of-the-pharma-industry-present-and-future/",
			src: "/articles/state-of.webp",
			description: "State Of The Pharma Industry: Present And Future",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/05/how-prior-authorization-reforms-can-help-value-based-care/",
			src: "/articles/how-prior.webp",
			description: "How Prior Authorization Reforms Can Help Value-Based Care",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/22/disruption-and-change-healthcare-trends-and-predictions-for-2024/",
			src: "/articles/disruption.webp",
			description:
				"Disruption And Change: Healthcare Trends And Predictions For 2024",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/19/18-cost-cutting-business-strategies-to-leverage-in-2024/",
			src: "/articles/18-cost.webp",
			description: "18 Cost-Cutting Business Strategies To Leverage In 2024",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/12/04/generative-ai-the-next-frontier-of-healthcare/",
			src: "/articles/generative-ai.webp",
			description: "Generative AI: The Next Frontier Of Healthcare",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/11/28/10-ways-leaders-can-smoothly-bring-on-a-new-c-suite-executive/",
			src: "/articles/10-ways.webp",
			description: "10 Ways Leaders Can Smoothly Bring On A New C-Suite Executive",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/30/5-considerations-for-health-plan-leaders-using-ai-enabled-prior-authorization-and-utilization-management/",
			src: "/articles/5-consideration.webp",
			description:
				"5 Considerations For Health Plan Leaders Using AI-Enabled Prior Authorization And Utilization Management",
		},
		{
			title: "",
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/13/19-creative-customer-loyalty-program-ideas-for-small-businesses/",
			src: "/articles/18-creative.webp",
			description:
				"18 Creative Customer Loyalty Program Ideas For Small Businesses",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSliding, setIsSliding] = useState(false);
	const [slideDirection, setSlideDirection] = useState(""); // "left" or "right"
	const [visibleArticles, setVisibleArticles] = useState(3); // Set default visible articles

	// Function to handle next article click
	const handleNext = () => {
		if (!isSliding) {
			setSlideDirection("right");
			setIsSliding(true);
			setTimeout(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex + visibleArticles >= articles.length
						? 0
						: prevIndex + visibleArticles
				);
				setIsSliding(false);
			}, 500); // Transition time should match CSS
		}
	};

	// Function to handle previous article click
	const handlePrev = () => {
		if (!isSliding) {
			setSlideDirection("left");
			setIsSliding(true);
			setTimeout(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === 0
						? articles.length - visibleArticles
						: prevIndex - visibleArticles
				);
				setIsSliding(false);
			}, 500); // Transition time should match CSS
		}
	};

	// Auto-slide logic
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		handleNext();
	// 	}, 5000); // Change article every 5 seconds
	// 	return () => clearInterval(interval); // Clear the interval on component unmount
	// }, [currentIndex]);

	// Set responsive behavior
	const handleResize = () => {
		// Check screen size to display 1 article on small screens
		if (window.innerWidth <= 768) {
			setVisibleArticles(1); // 1 article visible on small screens
		} else {
			setVisibleArticles(3); // Default to 3 articles on larger screens
		}
	};

	// Listen for window resize event
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize(); // Call the handler immediately to set the initial state
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Dots for navigation
	const totalSlides = Math.ceil(articles.length / visibleArticles);

	return (
		<div className="relative">
			<div className="py-10 overflow-hidden">
				{/* Carousel */}
				<div
					className={`flex gap-5 transform transition-transform duration-500 ${
						slideDirection === "right"
							? "translate-x-[-100%]"
							: slideDirection === "left"
							? "translate-x-[100%]"
							: "translate-x-0"
					}`}
					style={{
						transform: `translateX(${
							-currentIndex * (100 / visibleArticles)
						}%)`,
					}}
				>
					{articles.map((article, index) => (
						<Link
							key={index}
							href={article.link}
							target="_blank"
							className="p-2"
						>
							<div className="w-72 md:w-80">
								<div className="h-96 relative">
									<Image
										src={article.src}
										alt={article.description}
										width={958}
										height={441}
										className=" rounded-md h-96 w-80 object-cover"
									/>
									<h1 className="absolute bottom-2 left-2 text-3xl w-1/2 font-bold text-white text-shadow">
										{article.title}
									</h1>
								</div>
								<p className="text-xs pt-2">{article.description}</p>
							</div>
						</Link>
					))}
				</div>

				{/* Dots for Pagination */}
				<div className="flex justify-center mt-5 space-x-2">
					{Array.from({ length: totalSlides }).map((_, dotIndex) => (
						<button
							key={dotIndex}
							className={`w-3 h-3 rounded-full ${
								dotIndex === Math.floor(currentIndex / visibleArticles)
									? "bg-blue-600"
									: "bg-gray-300"
							}`}
							onClick={() => setCurrentIndex(dotIndex * visibleArticles)}
						></button>
					))}
				</div>
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
						fill="black"
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
						fill="black"
					/>
				</svg>
			</button>
		</div>
	);
}
