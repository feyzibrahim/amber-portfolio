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
				className="common-padding relative z-0"
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

			<motion.div
				ref={ref1}
				initial={{ opacity: 0, y: 100 }}
				animate={inView1 ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8 }}
				className="common-style relative grid grid-cols-1 md:grid-cols-2 gap-5"
				id="about"
			>
				<div className="z-10 flex items-center justify-center">
					<Image
						src="/icons/basys.png"
						alt=""
						width={950}
						height={955}
						className="w-2/3"
					/>
				</div>
				<div className="md:text-right flex flex-col justify-center gap-5">
					<p className="text-primary">About </p>
					<h1 className="text-3xl font-bold">
						CEO and founder of <span className="text-primary">basys.ai</span>
					</h1>
					<p className="text-foreground-secondary">
						With a background rooted in healthcare, AI, and entrepreneurship,
						and 14 years of experience in these fields. He holds a bachelor's
						degree in Computer Science and a master's degree in Health Data
						Science from Harvard.
					</p>
					<p className="text-foreground-secondary">
						Actively involved in both the entrepreneurship and academic
						communities, his work has been recognized with multiple
						fellowships, including the Cheng Fellowship and Halcyon
						Fellowship.
					</p>
					<div className="flex justify-end gap-5 text-left">
						<div>
							<h1 className="text-xl md:text-4xl font-bold">14+</h1>
							<p>Years of experience</p>
						</div>
						<div>
							<h1 className="text-xl md:text-4xl font-bold">11</h1>
							<p>Papers Published</p>
						</div>
						<div>
							<h1 className="text-xl md:text-4xl font-bold">2 M+</h1>
							<p>Funds Raised</p>
						</div>
					</div>
				</div>
				<Image
					src="/circle/light3.png"
					alt=""
					width={843}
					height={964}
					className="absolute md:left-10 -top-20 md:top-1/3 transform md:-translate-y-1/2 z-0"
				/>
			</motion.div>

			<div className="py-12" id="publications">
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
					className={`font-light text-foreground-secondary w-2/3 mx-auto pt-5 text-center ${outfit.className}`}
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
