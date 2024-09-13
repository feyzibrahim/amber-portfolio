import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { outfit } from "./fonts/fonts";

export const metadata: Metadata = {
	title: "Amber Nigam",
	description:
		"Amber Nigam is the Co-founder and CEO of Basys.ai, a digital health startup optimizing healthcare workflows with AI. A Harvard graduate, his work in AI and healthcare has been recognized in top conferences and journals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const theme = cookies().get("__theme__")?.value || "dark";

	return (
		<html lang="en">
			<body className={`${outfit.className}  antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
