"use client";
import AuthoredArticles from "@/components/authored-articles";
import FeaturedCompanies from "@/components/featured-companies";
import FirstSection from "@/components/first-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PublishedPapers from "@/components/papers-published";
import Publications from "@/components/publications";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { montserrat } from "./fonts/fonts";

export default function Home() {
	const { ref, inView } = useInView({
		threshold: 0.5, // Trigger when 10% of the element is visible
		triggerOnce: true, // Trigger only once
	});

	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const { ref: ref4, inView: inView4 } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<div>
			<Navbar />
			<FirstSection />
			<div className="common-style py-12" id="publications">
				<motion.h1
					ref={ref}
					initial={{ opacity: 0, y: 100 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className={`text-4xl font-bold text-center ${montserrat.className}`}
				>
					Publications
				</motion.h1>
				<Publications />
			</div>
			<motion.div
				ref={ref2}
				initial={{ opacity: 0, y: 100 }}
				animate={inView2 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className="common-padding bg-background-secondary py-12"
			>
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Featured In
				</h1>
				<div className="relative flex overflow-x-hidden space-x-14">
					<div className="py-12 space-x-14 animate-marquee whitespace-nowrap">
						<FeaturedCompanies />
					</div>
					<div className="absolute top-0 py-12 space-x-14 animate-marqueeOpposite whitespace-nowrap">
						<FeaturedCompanies />
					</div>
				</div>
			</motion.div>
			<div className="common-style py-12" id="articles">
				<motion.h1
					ref={ref3}
					initial={{ opacity: 0, y: 20 }}
					animate={inView3 ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className={`text-4xl font-bold text-center ${montserrat.className}`}
				>
					Authored Articles
				</motion.h1>
				<AuthoredArticles />
			</div>
			<div className="common-style py-12" id="articles">
				<motion.h1
					ref={ref4}
					initial={{ opacity: 0, y: 100 }}
					animate={inView4 ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className={`text-4xl font-bold text-center ${montserrat.className}`}
				>
					Papers Published
				</motion.h1>
				<PublishedPapers />
			</div>
			<Footer />
		</div>
	);
}
