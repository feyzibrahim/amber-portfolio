import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
	index: number;
	publication: { link: string; src: string; title: string; description: string };
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
			className="flex-shrink-0"
		>
			<Link
				key={index}
				href={publication.link}
				target="_blank"
				className="flex-shrink-0"
			>
				<div className="relative flex-shrink-0 h-96" key={index}>
					<Image
						src={publication.src}
						alt={publication.description}
						width={958} // Actual width of the image
						height={400} // Fixed height
						className="rounded-md h-80 w-full object-cover"
					/>
					<h1 className="absolute bottom-[4.4rem] left-2 text-3xl w-2/3 font-bold text-white text-shadow">
						{publication.title}
					</h1>
					<p className="absolute text-sm pt-2">{publication.description}</p>
				</div>
			</Link>
		</motion.div>
	);
}
