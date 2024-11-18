"use client";

import { useCartStore } from "@/store/card-stote";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";

export const CouponForm = ({ setModalOpen }: { setModalOpen: (isOpen: boolean) => void }) => {
	const { toast } = useToast();
	const discount = useCartStore((state) => state.discount);
	const applyCoupon = useCartStore((state) => state.applyCoupon); // Función para aplicar cupón

	const [couponCode, setCouponCode] = useState<string>("");

	const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCouponCode(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
		const result = applyCoupon(couponCode); // Llamar a la función de Zustand para aplicar el cupón
		if (result.success) {
			toast({
				title: "¡Cupón aplicado con éxito!",
				description: `El descuento del cupón se ha aplicado a tu compra.`,
				className: "bg-green-500 text-white border border-green-700 rounded-lg shadow-md",
			});
			setModalOpen(false);
		} else {
			toast({
				title: "Error al aplicar el cupón",
				description: `No se pudo aplicar el cupón. Verifica el código o intenta nuevamente.`,
			});
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="grid grid-cols-2 mt-4 mx-2 max-xl:grid-cols-1 gap-2">
				<Input type="text" value={couponCode} onChange={handleCouponChange} placeholder="Ingrese código de cupón" className="p-2 border border-gray-300 rounded" />
				<Button type="submit" className="bg-blue-500 text-white rounded hover:bg-blue-600" disabled={!!discount}>
					Aplicar cupón
				</Button>
			</form>
		</div>
	);
};
