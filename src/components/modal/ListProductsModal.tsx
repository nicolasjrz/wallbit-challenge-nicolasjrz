"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { getProducts } from "@/actions/get-products";
import { ProductItem } from "@/interfaces/product-interface";

import { ProductCard } from "../card/ProductCard";

export const ListProductsModal = () => {
	const [isModalOpen, setModalOpen] = useState(false); // Estado del modal
	const [products, setProducts] = useState([]); // Estado para los productos
	const [loading, setLoading] = useState(false); // Estado para indicar si está cargando
	const handleOpen = async () => {
		setModalOpen(true);
		await loadProducts(); // Cargar los productos al abrir el modal
	};

	const loadProducts = async () => {
		setLoading(true);
		const productsList = await getProducts();
		setProducts(productsList);
		setLoading(false);
	};

	return (
		<>
			<a onClick={handleOpen} className=" font-bold hover:underline text-blue-500 cursor-pointer">
				nuestro catálogo
			</a>

			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900">
					<DialogHeader>
						<DialogTitle className="text-gray-100 text-xl">Lista de Productos</DialogTitle>
						<DialogDescription className="text-gray-200">Aquí está el listado de productos disponibles.</DialogDescription>
					</DialogHeader>

					{loading ? (
						<p>Cargando productos...</p>
					) : (
						<div className="mt-4 space-y-4">
							{products.map((product: ProductItem) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
