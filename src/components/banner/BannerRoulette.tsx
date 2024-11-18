import React from "react";
import { RouletteModal } from "../modal/RouletteModal";

export const BannerRoulette = () => {
	return (
		<div className="w-full    py-2  grid grid-cols-2  place-items-center  max-sm:grid-cols-1 max-sm:px-2 ">
			<div className="flex flex-col  ">
				<span className="text-4xl font-medium max-sm:text-lg">¡Gira la ruleta y gana un cupón de descuento!</span>
				<span className="text-lg max-sm:hidden">Obtén una consulta gratuita hoy mismo y recibe un descuento exclusivo. ¡No te lo pierdas!</span>
			</div>

			<div className="  flex w-full justify-center items-center  max-sm:mt-4">
				<RouletteModal />
			</div>
		</div>
	);
};
