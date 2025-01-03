"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollArea } from "./ui/scroll-area";

export default function AboutSection() {
	const { ref: ref1, inView: inView1 } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	// Parent variants for staggering children animations
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3, // 0.3 seconds delay between each item
			},
		},
	};

	// Child variants for individual items animation
	const childVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div
			ref={ref1}
			initial="hidden"
			animate={inView1 ? "visible" : "hidden"}
			variants={containerVariants} // Parent container to stagger children
			className="common-style relative grid grid-cols-1 md:grid-cols-2 gap-5"
			id="about"
		>
			{/* Left side: image */}
			<motion.div
				variants={childVariants}
				className="z-10 flex items-center justify-center"
			>
				<Image
					src="/icons/basys.png"
					alt="basys.ai logo"
					width={950}
					height={955}
					className="w-2/3"
				/>
			</motion.div>

			{/* Right side: text and stats */}
			<motion.div className="flex flex-col justify-center gap-5">
				<motion.p variants={childVariants} className="text-card">
					About
				</motion.p>

				<motion.h1 variants={childVariants} className="text-3xl font-bold">
					CEO and co-founder of basys.ai
				</motion.h1>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					With over 14 years of experience in healthcare, artificial
					intelligence, and entrepreneurship, Amber Nigam brings a deep
					expertise in leveraging cutting-edge technologies to drive innovation.
					He holds a Bachelor's degree in Computer Science and a Master's in
					Health Data Science from Harvard University.
				</motion.p>

				<motion.p variants={childVariants} className="text-foreground-secondary">
					Actively engaged in both the entrepreneurial and academic communities,
					he has received several prestigious fellowships, including the Cheng
					Fellowship and the Halcyon Fellowship, in recognition of his
					contributions and achievements.
				</motion.p>

				{/* Stats */}
				<motion.div variants={containerVariants} className="flex gap-5">
					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">14+</h1>
						<p>Years of experience</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">11</h1>
						<p>Papers Published</p>
					</motion.div>

					<motion.div variants={childVariants}>
						<h1 className="text-xl md:text-4xl font-bold">2 M+</h1>
						<p>Funds Raised</p>
					</motion.div>
				</motion.div>
				<motion.div variants={childVariants} className="z-30">
					<Dialog>
						<DialogTrigger asChild>
							<button className="z-30 flex items-center gap-2 text-card underline underline-offset-2 hover:underline-offset-4 duration-150 hover:text-primary-hover">
								<Image
									src="/icons/sparkles.png"
									alt=""
									width={18}
									height={18}
								/>{" "}
								Show More <ArrowRight className="w-5 h-5" />
							</button>
						</DialogTrigger>
						<DialogContent className="rounded border-none bg-background">
							<DialogHeader>
								<DialogTitle>Amber Nigam</DialogTitle>
								<DialogDescription>
									<ScrollArea className="w-full h-96">
										<div className="pr-2 space-y-3 text-left text-black">
											<p>
												Amber Nigam, with over a dozen years of
												experience in healthcare and AI, is the
												co-founder and CEO of basys.ai, a
												healthtech startup focused on utilizing
												generative AI to enhance prior
												authorization and utilization management
												for health plans and health systems. In
												this role, he leads business development,
												strategy, and fundraising efforts, driven
												by a passion for driving cost savings and
												improving healthcare outcomes.
											</p>
											<p>
												Amber holds a Bachelor's degree in
												Computer Science and a Master's in Health
												Data Science from Harvard University,
												where he was recognized as a Cheng Fellow,
												Roslyn and Lisle Payne Scholar, and a
												recipient of the 40 Under 40 Award from
												the Boston Congress of Public Health. He
												has contributed to three patents and
												authored multiple research papers on the
												intersection of AI and healthcare.
											</p>
											<p>
												Previously, Amber founded kydots.ai, where
												he led both business development and
												engineering teams to deliver a SaaS
												product for enterprise clients in the
												financial management and human capital
												sectors. This venture resulted in two
												patents, a research paper, and an
												acquisition.
											</p>
											<p>
												Amber is a passionate advocate for
												community and collective leadership. He
												mentors startups through TechStars,
												Harvard, MIT, MassChallenge, and
												XLerateHealth, and has served as
												Co-Director of the Harvard Business Club,
												offering strategic support and fundraising
												guidance to Harvard-affiliated founders.
											</p>
											<p>
												An applied machine learning enthusiast,
												Amber has contributed to both professional
												and academic initiatives in the AI domain.
												He has co-instructed a collaborative data
												science course at MIT, and his work has
												been featured at leading conferences such
												as NeurIPS and ACL, as well as in
												prestigious journals including The Lancet
												and Springer.
											</p>
											<p>
												Healthcare and technology are personal
												passions for Amber, and he has shared his
												insights on public platforms, speaking at
												events like TEDx, Mayo Clinic, DuPont, and
												Udacity. His startups have been featured
												in outlets such as Forbes and TechCrunch.
											</p>
										</div>
									</ScrollArea>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
