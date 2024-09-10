import { Inter, Old_Standard_TT, Montserrat } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});
export const oldStandardTT = Old_Standard_TT({
	weight: ["400", "700"],
	style: "normal",
	preload: false,
});
export const montserrat = Montserrat({
	subsets: ["latin"],
});
