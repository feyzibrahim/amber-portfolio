"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// Scroll Down
				setIsVisible(false);
			} else {
				// Scroll Up
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lastScrollY]);

	return (
		<nav
			className={`w-full px-5 lg:px-40 py-2 grid grid-cols-3 items-center fixed top-0 left-0 transition-transform duration-300 bg-background-secondary shadow-md z-50 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<Link href="/">
				<div className="flex gap-2 items-center hover:cursor-pointer animate-fadeIn">
					<p className="font-bold">Amber Nigam</p>
				</div>
			</Link>
			<div className="hidden lg:flex justify-center gap-5 text-sm animate-fadeIn ">
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#about">Publications</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#experience">Articles</Link>
				</p>
				<p className="text-foreground-secondary cursor-pointer hover:text-foreground">
					<Link href="#contact">About</Link>
				</p>
			</div>
			<div className="flex justify-end gap-5">
				<Button>Get In Touch</Button>
				<ModeToggle />
			</div>
			<div className="lg:hidden">
				<AlignJustify />
			</div>
		</nav>
	);
}
