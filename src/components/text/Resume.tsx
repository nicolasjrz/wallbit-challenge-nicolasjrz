"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "@/store/card-stote";
import { CouponModal } from "../modal/CouponModal";

export const Resume = () => {
	const [subtotal, setSubtotal] = useState(0);
	const calculateTotal = useCartStore((state) => state.calculateTotal);
	const removeCoupon = useCartStore((state) => state.removeCoupon);
	const isCouponApplied = useCartStore((state) => state.isCouponApplied);
	const couponCode = useCartStore((state) => state.couponCode);
	const totall = useCartStore((state) => state.getTotalItems);
	const products = useCartStore((state) => state.products);
	const cantProducts = totall();

	useEffect(() => {
		setSubtotal(products.reduce((total, product) => total + product.price * product.quantity, 0));
	}, [products]);

	return (
		<div className="mt-2 max-sm:h-80 flex flex-col justify-between  ">
			<div className="max-sm:text-center">
				<p className="text-2xl font-bold font-[family-name:var(--font-poppins-sans)]">Resumen de compra</p>
			</div>

			{/* Mostrar el mensaje cuando el carrito está vacío */}
			{products.length === 0 ? (
				<p>Aquí verás los importes de tu compra una vez que agregues productos.</p>
			) : (
				<div className=" flex flex-col h-72 justify-between flex-grow w-full  mt-6  ">
					{/* Contenido con total */}
					<div className="flex flex-col justify-between mt-4 flex-grow  bg-neutral-700 bg-opacity-40 rounded-sm  py-4 px-4">
						<div className="text-end">
							{isCouponApplied ? (
								<div className="flex justify-between items-center  py-2 mt-2">
									<div className="flex items-center">
										<p className="text-sm font-medium mr-2 max-sm:text-xs">
											Código de descuento: <span className=" text-xs font-bold">{couponCode}</span>
										</p>
									</div>
									<button className="flex items-center justify-center p-1 text-xs font-bold uppercase text-red-300 hover:text-red-700 max-sm:text-xs" onClick={() => removeCoupon()}>
										Eliminar código
									</button>
								</div>
							) : (
								<div className="mt-3">
									<CouponModal />
								</div>
							)}
						</div>

						{/* Mostrar el total con descuento */}
						{!isCouponApplied ? (
							<div>
								<div className="flex justify-between">
									<p className="text-xl font-medium max-sm:text-lg">Total de items </p>
									<p className="text-xl font-bold font-[family-name:var(--font-poppins-sans)] max-sm:text-lg">( {cantProducts} )</p>
								</div>
								<div className="flex justify-between mt-2">
									<p className="text-2xl font-bold font-[family-name:var(--font-poppins-sans)] max-sm:text-xl">Total</p>
									<p className="text-2xl font-bold font-[family-name:var(--font-poppins-sans)] max-sm:text-xl">${subtotal.toFixed(2)}</p>
								</div>
							</div>
						) : (
							<div>
								<div className="flex justify-between">
									<p className="text-lg font-medium">Total de items </p>
									<p>({cantProducts})</p>
								</div>
								<div className="flex justify-between mt-2">
									<p className="text-2xl font-bold font-[family-name:var(--font-poppins-sans)] max-sm:text-xl">Total con descuento</p>
									<p className="text-2xl font-bold font-[family-name:var(--font-poppins-sans)] max-sm:text-xl">${calculateTotal().toFixed(2)}</p>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
