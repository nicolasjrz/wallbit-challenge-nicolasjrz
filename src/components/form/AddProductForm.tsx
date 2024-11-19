import { useCartStore } from "@/store/card-stote";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaCartPlus } from "react-icons/fa6";

export const AddProductForm = ({ setModalOpen }: { setModalOpen: (isOpen: boolean) => void }) => {
	const { toast } = useToast();
	const [productId, setProductId] = useState<number | null>(null);
	const [quantity, setQuantity] = useState<number | null>(null);
	const addProduct = useCartStore((state) => state.addProduct);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!productId || !quantity) {
			toast({
				title: "Formulario incompleto",
				description: "Por favor, selecciona un producto y una cantidad.",
				className: "bg-red-500 text-white border border-red-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
			});
			return;
		}

		try {
			const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

			if (!response.ok) {
				throw new Error("No se pudo obtener información del producto.");
			}

			const data = await response.json();

			addProduct({
				id: data.id,
				title: data.title,
				price: data.price,
				quantity,
				image: data.image,
			});

			setModalOpen(false);

			toast({
				title: "Producto agregado",
				description: `El producto ${data.title} fue agregado al carrito correctamente. `,
				className: "bg-green-500 text-white border border-green-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
			});

			setProductId(null);
			setQuantity(null);
		} catch (error) {
			console.error("Error fetching product:", error);

			toast({
				title: "Error al agregar producto",
				description: "Ocurrió un error al intentar agregar el producto. Por favor, intenta nuevamente.",
				className: "bg-red-500 text-white border border-red-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
			});
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex w-full  items-center gap-4  py-4  max-sm:flex-col">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">ID Producto</Label>
					<Input type="number" value={productId || ""} min={0} onChange={(e) => setProductId(Number(e.target.value))} placeholder="ID Producto" />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="email">Cantidad</Label>
					<Input type="number" value={quantity || ""} min={0} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Cantidad" />
				</div>
				<div className="pt-5 ">
					<Button type="submit" className="bg-blue-500 text-white px-4 py-2 uppercase rounded-md hover:bg-blue-800">
						<FaCartPlus /> Agregar
					</Button>
				</div>
			</form>
		</div>
	);
};
