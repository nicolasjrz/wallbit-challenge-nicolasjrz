"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { getProducts } from "@/actions/get-products";
import { ProductItem } from "@/interfaces/product-interface";
import Image from "next/image";

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
								<div key={product.id} className="max-w-sm mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
									<div className="md:flex">
										<div className="md:flex-shrink-0">
											<div className=" flex justify-center items-center h-full w-full ml-4">
												<Image src={product.image} alt={product.title} width={100} height={100} className="object-contain" />
											</div>
										</div>
										<div className="p-8">
											<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
												{product.title}
											</a>
											<p className="mt-2 text-gray-500">{product.description}</p>
											<div className="mt-4 grid grid-cols-3 max-sm:grid-cols-1">
												<p className="text-gray-600  uppercase tracking-wide text-sm font-semibold">
													ID: <span className="font-bold">{product.id}</span>
												</p>
												<p className=" text-gray-600 uppercase tracking-wide text-sm font-semibold">
													Rating: <span className="font-bold">{product.rating.rate}</span>
												</p>
												<p className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
													Precio: <span className="font-bold">${product.price}</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
