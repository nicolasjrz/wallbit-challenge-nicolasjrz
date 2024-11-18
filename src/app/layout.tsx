import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppinsSans = localFont({
	src: "./fonts/Poppins-SemiBold.ttf",
	variable: "--font-poppins-sans",
	weight: "100 900",
});
const poppinsMono = localFont({
	src: "./fonts/Poppins-Regular.ttf",
	variable: "--font-poppins-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Wallbit Tienda",
	description: "Challenge de wallbit x goncy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppinsSans.variable} ${poppinsMono.variable} antialiased`}>
				<div>
					{children}
					<Toaster />
				</div>
			</body>
		</html>
	);
}
