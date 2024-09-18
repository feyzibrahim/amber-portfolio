"use client";
import { outfit } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Articles from "./articles";

export default function AuthoredArticles() {
	// All the articles
	const articles = [
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/09/10/true-north-or-true-mess-keeping-your-authenticity-intact-in-leadership/",
			src: "/articles/true-north.webp",
			title: "True North Or True Mess? Keeping Your Authenticity Intact In Leadership",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/07/29/the-ai-revolution-in-healthcare-how-legacy-providers-can-adapt/",
			src: "/articles/ai-revolution.webp",
			title: "The AI Revolution In Healthcare: How Legacy Providers Can Adapt",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/06/11/evaluating-ai-startups-finding-the-novel-and-necessary-in-all-the-noise/",
			src: "/articles/evaluating-ai.webp",
			title: "Evaluating AI Startups: Finding The Novel And Necessary In All The Noise",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/05/15/how-large-language-models-are-putting-skin-in-the-healthcare-game/",
			src: "/articles/how-large.webp",
			title: "How Large Language Models Are Putting Skin In The Healthcare Game",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/04/08/state-of-the-pharma-industry-present-and-future/",
			src: "/articles/state-of.webp",
			title: "State Of The Pharma Industry: Present And Future",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/03/05/how-prior-authorization-reforms-can-help-value-based-care/",
			src: "/articles/how-prior.webp",
			title: "How Prior Authorization Reforms Can Help Value-Based Care",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/22/disruption-and-change-healthcare-trends-and-predictions-for-2024/",
			src: "/articles/disruption.webp",
			title: "Disruption And Change: Healthcare Trends And Predictions For 2024",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/01/19/18-cost-cutting-business-strategies-to-leverage-in-2024/",
			src: "/articles/18-cost.webp",
			title: "18 Cost-Cutting Business Strategies To Leverage In 2024",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/12/04/generative-ai-the-next-frontier-of-healthcare/",
			src: "/articles/generative-ai.webp",
			title: "Generative AI: The Next Frontier Of Healthcare",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/11/28/10-ways-leaders-can-smoothly-bring-on-a-new-c-suite-executive/",
			src: "/articles/10-ways.webp",
			title: "10 Ways Leaders Can Smoothly Bring On A New C-Suite Executive",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/30/5-considerations-for-health-plan-leaders-using-ai-enabled-prior-authorization-and-utilization-management/",
			src: "/articles/5-consideration.webp",
			title: "5 Considerations For Health Plan Leaders Using AI-Enabled Prior Authorization And Utilization Management",
		},
		{
			link: "https://www.forbes.com/councils/forbesbusinesscouncil/2023/10/13/19-creative-customer-loyalty-program-ideas-for-small-businesses/",
			src: "/articles/18-creative.webp",
			title: "18 Creative Customer Loyalty Program Ideas For Small Businesses",
		},
	];

	const [visibleArticles, setVisibleArticles] = useState(8); // Initially show 8 articles

	// Function to load more articles
	const showMoreArticles = () => {
		setVisibleArticles((prev) => prev + 8); // Show 8 more articles
	};

	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div className=" md:py-10 space-y-3">
			<motion.h1
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`text-4xl font-bold md:text-center ${outfit.className}`}
			>
				Authored Articles
			</motion.h1>

			<motion.p
				ref={ref3}
				initial={{ opacity: 0, y: 20 }}
				animate={inView3 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className={`md:text-center ${outfit.className} md:w-2/3 mx-auto text-foreground-secondary`}
			>
				Authored insightful articles on AI-driven healthcare innovations,
				entrepreneurship, and leadership.
			</motion.p>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-5">
				{articles.slice(0, visibleArticles).map((article, index) => (
					<Articles article={article} index={index} key={index} />
				))}
			</div>

			{/* Show More Button */}
			{visibleArticles < articles.length && (
				<div className="flex justify-center pt-5">
					<button
						onClick={showMoreArticles}
						className="z-30  flex items-center gap-2 text-primary underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover"
					>
						<Image src="/icons/sparkles.png" alt="" width={18} height={18} />{" "}
						Show More <ArrowRight className="w-5 h-5" />
					</button>
				</div>
			)}
		</div>
	);
}
