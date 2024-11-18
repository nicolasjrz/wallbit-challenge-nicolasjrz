"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { AddProductForm } from "../form/AddProductForm";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";

export const AddProductModal = () => {
	const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

	const handleOpen = async () => {
		setModalOpen(true);
	};

	return (
		<>
			<Button onClick={handleOpen} className="bg-blue-500 text-white px-4 py-2  mr-5 uppercase rounded-md hover:bg-blue-800 max-sm:text-xs max-sm:mr-0">
				<FaPlus /> Agregar producto
			</Button>

			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900  ">
					<DialogHeader>
						<DialogTitle>Agregar productos al carrito</DialogTitle>
						<DialogDescription>ingresa el id y la cantidad</DialogDescription>
					</DialogHeader>
					<AddProductForm setModalOpen={setModalOpen} />
				</DialogContent>
			</Dialog>
		</>
	);
};
