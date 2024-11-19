import React from "react";
import { RouletteModal } from "../modal/RouletteModal";

export const BannerRoulette = () => {
	return (
		<div className="w-full    py-2  grid grid-cols-2  place-items-center  max-sm:grid-cols-1 max-sm:px-2 ">
			<div className="flex flex-col">
				<span className="text-4xl font-bold text-center max-sm:text-lg">¡Gira la ruleta y gana un increíble descuento!</span>
				<span className="text-lg mt-2 text-neutral-100 text-center max-sm:hidden">Aprovecha esta oportunidad para obtener un descuento exclusivo en tu próxima compra.</span>
			</div>

			<div className="  flex w-full justify-center items-center  max-sm:mt-4">
				<RouletteModal />
			</div>
		</div>
	);
};
