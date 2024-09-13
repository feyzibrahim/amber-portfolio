import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface Props {
	index: number;
	publication: {
		link: string;
		title: string;
		description: string;
		year?: string;
		src?: string;
	};
}

export default function Publication({ index, publication }: Props) {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger animation only once when scrolled into view
		threshold: 0.01, // 10% of the element is in view before animation starts
	});

	// Animation variants for each publication
	const publicationVariants = {
		hidden: { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.1, // Stagger delay based on index
				duration: 0.5, // Animation duration
			},
		}),
	};

	return (
		<motion.div
			ref={ref} // Each publication has its own observer
			key={index}
			initial="hidden"
			animate={inView ? "visible" : "hidden"} // Animate only when in view
			custom={index} // Pass the index to variants for staggered delay
			variants={publicationVariants}
			className="neumorphism rounded-md w-96 flex-shrink-0 flex flex-col justify-between p-5"
		>
			<p className="pt-2 font-light pb-2 text-foreground-secondary">
				{publication.description}
			</p>
			<div className="border-t pt-2 flex justify-between">
				<div className="flex items-center gap-2">
					<Image
						src={publication.src ?? ""}
						alt=""
						width={60}
						height={60}
						className="h-12 w-12"
					/>
					<div>
						<h1 className="font-bold">{publication.title}</h1>
						<p className="text-xs text-foreground-secondary">
							{publication.year}
						</p>
					</div>
				</div>
				<Link
					href={publication.link}
					target="_blank"
					className="z-30 flex text-xs items-center gap-2 text-primary underline underline-offset-4 hover:text-primary-hover"
				>
					<Image src="/icons/sparkles.png" alt="" width={15} height={15} /> View{" "}
					<ArrowRight className="w-4 h-4" />
				</Link>
			</div>
		</motion.div>
	);
}
