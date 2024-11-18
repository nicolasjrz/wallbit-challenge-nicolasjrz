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
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900 rounded-lg shadow-lg text-white">
					<DialogHeader className="text-center">
						<DialogTitle className="text-2xl font-bold">¡Canjea tu Cupón!</DialogTitle>
						<DialogDescription className="text-lg mt-2 text-neutral-300">
							Ingresa el código de tu cupón para desbloquear descuentos exclusivos. ¡Aprovecha esta oportunidad!
						</DialogDescription>
					</DialogHeader>
					<div className="mt-4">
						<CouponForm setModalOpen={setModalOpen} />
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
