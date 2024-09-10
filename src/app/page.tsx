import Navbar from "@/components/navbar";
import Image from "next/image";
import { montserrat } from "./fonts/fonts";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="common-style flex flex-col gap-8 items-center text-center border-b">
				<div className="absolute top-0 w-full bg-background-secondary h-1/2 -z-10"></div>
				<h1 className={`text-4xl font-bold ${montserrat.className}`}>
					Meet Amber Nigam
				</h1>
				<Image
					className="w-3/12"
					src="/amber.png"
					alt="Amber Nigam"
					width={403}
					height={448}
					priority
				/>
				<p className="w-2/3">
					Amber Nigam is the Co-founder and CEO of Basys.ai, a digital health
					startup optimizing healthcare workflows with AI. A Harvard graduate,
					his work in AI and healthcare has been recognized in top conferences
					and journals.
				</p>
			</main>
			<div className="common-style">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Publications
				</h1>
			</div>
			<div className="common-padding bg-background-secondary">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Featured In
				</h1>
			</div>
			<div className="common-style">
				<h1 className={`text-4xl font-bold text-center ${montserrat.className}`}>
					Authored Articles
				</h1>
			</div>
			<footer className="grid grid-cols-1 lg:grid-cols-2">
				<div>
					<h1>Amber Nigam</h1>
				</div>
				<div>
					<input type="text" placeholder="First name" />
					<input type="email" placeholder="Enter your email" />
					<input type="submit" />
				</div>
			</footer>
		</div>
	);
}
