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
import { outfit } from "./fonts/fonts";
import Image from "next/image";
import AboutSection from "@/components/about";

export default function Home() {
	const { ref, inView } = useInView({
		threshold: 0.5, // Trigger when 10% of the element is visible
		triggerOnce: true, // Trigger only once
	});
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5, // Trigger when 10% of the element is visible
		triggerOnce: true, // Trigger only once
	});

	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<div className="bg-background">
			<Navbar />
			<FirstSection />

			{/* Featured Slider */}

			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ duration: 0.8 }}
				className="common-padding relative"
			>
				<div className="fade-effect-wrapper relative flex overflow-x-hidden space-x-14">
					<div className="space-x-14 animate-marquee whitespace-nowrap">
						<FeaturedCompanies />
					</div>
					<div className="absolute top-0 space-x-14 animate-marqueeOpposite whitespace-nowrap">
						<FeaturedCompanies />
					</div>
				</div>
			</motion.div>

			{/* About */}

			<AboutSection />

			<div className="py-12 relative" id="publications">
				<motion.h1
					ref={ref2}
					initial={{ opacity: 0, y: 100 }}
					animate={inView2 ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className={`text-4xl font-bold text-center ${outfit.className}`}
				>
					Publications
				</motion.h1>
				<motion.p
					ref={ref2}
					initial={{ opacity: 0, y: 100 }}
					animate={inView2 ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className={`font-light text-foreground-secondary px-5 md:w-2/3 mx-auto pt-5 text-center ${outfit.className}`}
				>
					Recognized across numerous reputable platforms, basys.ai's pioneering
					work in AI-driven healthcare continues to solidify its position as an
					industry leader and innovator.
				</motion.p>
				<Publications />
			</div>

			<div className="common-style py-12" id="articles">
				<AuthoredArticles />
			</div>
			<div className="common-style py-12 relative" id="articles">
				<PublishedPapers />
			</div>
			<Footer />
		</div>
	);
}
