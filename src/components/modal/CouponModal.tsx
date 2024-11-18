"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { CouponForm } from "../form/CouponForm";

export const CouponModal = () => {
	const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

	const handleOpen = async () => {
		setModalOpen(true);
	};

	return (
		<>
			<a onClick={handleOpen} className="font-medium text-blue-300 hover:underline pt-14 cursor-pointer">
				Ingresar código de cupón
			</a>

			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900 ">
					<DialogHeader>
						<DialogTitle>Cupones</DialogTitle>
						<DialogDescription>ingresa el cupon obtenido</DialogDescription>
					</DialogHeader>
					<CouponForm setModalOpen={setModalOpen} />
				</DialogContent>
			</Dialog>
		</>
	);
};
