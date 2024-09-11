import Navbar from "@/components/navbar";
import Image from "next/image";
import { montserrat } from "./fonts/fonts";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import FeaturedCompanies from "@/components/featured-companies";
import AuthoredArticles from "@/components/authored-articles";
import PublishedPapers from "@/components/papers-published";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="common-style flex flex-col gap-8 items-center text-center border-b">
				<div className="absolute top-0 w-full bg-background-secondary h-1/2 -z-10"></div>
				<h1 className={`text-2xl md:text-4xl font-bold ${montserrat.className}`}>
					Meet Amber Nigam
				</h1>
				<Image
					className="md:w-3/12 shadow-lg"
					src="/amber.png"
					alt="Amber Nigam"
					width={403}
					height={448}
					priority
				/>
				<p className="md:w-2/3 leading-relaxed tracking-wide">
					Amber Nigam is the Co-founder and CEO of Basys.ai, a digital health
					startup optimizing healthcare workflows with AI. A Harvard graduate,
					his work in AI and healthcare has been recognized in top conferences
					and journals.
				</p>
			</main>
			<div className="common-style py-12" id="publications">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Publications
				</h1>
			</div>
			<div className="common-padding bg-background-secondary py-12">
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
			</div>
			<div className="common-style py-12" id="articles">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Authored Articles
				</h1>
				<AuthoredArticles />
			</div>
			<div className="common-style py-12" id="articles">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Papers Published
				</h1>
				<PublishedPapers />
			</div>
			<footer className="common-padding grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-background-secondary">
				<div>
					<h1 className="text-3xl font-semibold">Amber Nigam</h1>
					<p className="text-gray-400 mt-4">
						CEO and Co-founder of{" "}
						<Link
							href="https://www.basys.ai/"
							target="_blank"
							className="text-basys hover:underline"
						>
							basys.ai.
						</Link>{" "}
						Leading innovations in AI and healthcare.
					</p>
					<div className="flex gap-3 pt-5">
						<Link
							href="https://www.linkedin.com/in/amber-nigam/"
							target="_blank"
							className="text-basys hover:underline"
						>
							<Linkedin />
						</Link>
						<Link
							href="https://x.com/AmBeRnIgAm"
							target="_blank"
							className="text-basys hover:underline"
						>
							<Twitter />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="First name"
						className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
					/>
					<input
						type="email"
						placeholder="Enter your email"
						className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
					/>
					<input
						type="submit"
						value="Get In Touch"
						className="p-4 bg-basys cursor-pointer text-white rounded-md hover:bg-gray-900 transition"
					/>
				</div>
			</footer>
		</div>
	);
}
