import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// reactStrictMode: true,
	// swcMinify: true,
	// i18n: {
	// 	defaultLocale: "en",
	// 	locales: ["en", "hi"],
	// },
	images: {
		domains: ["demos.creative-tim.com", "fakestoreapi.com"], // Reemplaza con tus dominios

		// path: "/",
	},
};

export default nextConfig;
