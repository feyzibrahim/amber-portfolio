"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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

	const [visibleArticles, setVisibleArticles] = useState(6); // Initially show 6 articles

	// Function to load more articles
	const showMoreArticles = () => {
		setVisibleArticles((prev) => prev + 6); // Show 6 more articles
	};

	return (
		<div className="py-10">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{articles.slice(0, visibleArticles).map((article, index) => (
					<Link
						key={index}
						href={article.link}
						target="_blank"
						className="hover:shadow-lg p-2"
					>
						<div>
							<Image
								src={article.src}
								alt=""
								width={958}
								height={541}
								className="rounded-md h-52 w-full object-cover"
							/>
							<p>{article.title}</p>
						</div>
					</Link>
				))}
			</div>

			{/* Show More Button */}
			{visibleArticles < articles.length && (
				<div className="flex justify-center mt-5">
					<Button onClick={showMoreArticles}>Show More</Button>
				</div>
			)}
		</div>
	);
}
