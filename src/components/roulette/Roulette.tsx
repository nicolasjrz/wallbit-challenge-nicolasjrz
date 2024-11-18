"use client";

import { arrayImagesRoulette } from "@/data/array";
import Image from "next/image";
import { useState } from "react";
import logowallbit from "../../../public//logo/favicon.webp";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

import { FaWandMagicSparkles } from "react-icons/fa6";

const coupons = [
	{ code: "MILANESA", discount: 10 },
	{ code: "MAYONESA", discount: 20 },
	{ code: "GONCY", discount: 30 },
	{ code: "WALLBIT", discount: 50 },
	{ code: "NOCUPON", discount: 0 },
];

const getRandomCoupon = () => {
	const randomIndex = Math.floor(Math.random() * coupons.length);
	return coupons[randomIndex];
};

const getRandomImage = () => {
	const randomIndex = Math.floor(Math.random() * arrayImagesRoulette.length);
	return arrayImagesRoulette[randomIndex].url;
};

const Roulette = () => {
	const { toast } = useToast();

	const [coupon, setCoupon] = useState<{ code: string; discount: number }>({ code: "", discount: 0 });
	const [spinning, setSpinning] = useState(false);
	const [currentImage, setCurrentImage] = useState(arrayImagesRoulette[0].url);

	const handleSpin = () => {
		if (spinning) return;
		setSpinning(true);

		const interval = setInterval(() => {
			setCurrentImage(getRandomImage());
		}, 200);

		setTimeout(() => {
			clearInterval(interval);
			const randomCoupon = getRandomCoupon();
			setCoupon(randomCoupon);
			setCurrentImage(getRandomImage());
			setSpinning(false);
		}, 2000);
	};

	// Función para copiar al portapapeles
	const handleCopy = () => {
		if (coupon.code) {
			navigator.clipboard
				.writeText(coupon.code)
				.then(() =>
					toast({
						title: "¡Código copiado al portapapeles!",
						className: "bg-blue-500 text-white border border-blue-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
					})
				)
				.catch(() =>
					toast({
						title: "Error al copiar el código. Intenta nuevamente.",
						className: "bg-red-500 text-white border border-red-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
					})
				);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div
				className="roulette-container border rounded-full overflow-hidden"
				style={{
					width: "200px",
					height: "200px",
					border: "5px solid #ccc",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{spinning ? (
					<Image src={currentImage} alt="Ruleta girando" className="object-cover" width={200} height={200} />
				) : (
					<p className="font-bold cursor-pointer text-blue-400" onClick={handleCopy}>
						{coupon.code || <Image src={logowallbit} alt="Ruleta girando" className="object-cover bg-slate-200 bg-opacity-20" width={200} height={200} />}
					</p>
				)}
			</div>
			<Button onClick={handleSpin} className="bg-blue-500 text-white uppercase px-4 py-2 mt-10 rounded-md hover:bg-blue-800 flex items-center justify-center gap-2" disabled={spinning}>
				{spinning ? (
					"Espere..."
				) : (
					<>
						<FaWandMagicSparkles /> Girar Ruleta <FaWandMagicSparkles />
					</>
				)}
			</Button>

			{coupon.code && !spinning && (
				<div className="mt-4">
					{coupon.code !== "NOCUPON" ? (
						<p>
							¡Felicidades! Has obtenido un <strong className="text-blue-500">{coupon.discount}%</strong> de descuento.
						</p>
					) : (
						<p>Lo siento, no has ganado ningún cupón esta vez.</p>
					)}
				</div>
			)}
		</div>
	);
};

export default Roulette;
