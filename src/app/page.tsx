"use client";

import { ListProductsModal } from "@/components/modal/ListProductsModal";
import { Table } from "@/components/table/Table";
import { Resume } from "@/components/text/Resume";
import { useCartStore } from "@/store/card-stote";
import Image from "next/image";
import { useEffect } from "react";
import logo from "../../public/logo/logo-wallbit.svg";
import { BannerRoulette } from "@/components/banner/BannerRoulette";
import { AddProductModal } from "@/components/modal/AddProductModal";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
	const loadProducts = useCartStore((state) => state.loadProducts);
	const createdAt = useCartStore((state) => state.createdAt);

	useEffect(() => {
		loadProducts(); // Cargar productos desde localStorage al inicio
	}, [loadProducts]);

	return (
		<div className="px-52 mt-2 max-lg:px-2">
			<a href="https://wallbit.io/" target="_blank" rel="noopener noreferrer">
				<Image src={logo} alt="logo wallbit" className="w-60 inline-block relative object-center !rounded-none object-contain p-1" width={100} height={100} />
			</a>

			<div className="flex justify-start items-center">
				{/* Resumen de formulario */}
				<div className="grid grid-cols-2 max-sm:grid-cols-1 w-full">
					<div className="flex justify-start items-center max-sm:flex-col py-4">
						<p className="text-lg font-medium">
							Explora{" "}
							<span>
								<ListProductsModal />
							</span>{" "}
							de productos y agrégalos al carrito de compra.
						</p>
					</div>

					<div className="w-full flex items-center justify-end max-sm:justify-center">
						<AddProductModal />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-2 max-sm:grid-cols-1">
				{/* Tabla carrito de compra */}
				<div>
					<div className="grid grid-cols-1 mt-2 max-sm:text-center">
						<div>
							<p className="text-2xl font-[family-name:var(--font-poppins-sans)]">Carrito de compra</p>
							{createdAt && (
								<p className="text-sm ml-1 font-semibold">
									Iniciado: <span className="font-medium">{createdAt}</span>
								</p>
							)}
						</div>
					</div>
					<Table />
				</div>

				{/* Resumen de compra */}
				<div className="px-4 flex flex-col justify-between max-sm:pb-10">
					<Resume />
				</div>
			</div>

			{/* Roulette */}
			<BannerRoulette />
			<Footer />
		</div>
	);
}
