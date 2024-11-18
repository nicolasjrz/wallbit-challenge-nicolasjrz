"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import Roulette from "../roulette/Roulette";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import { FaRegHandPointRight } from "react-icons/fa6";

import { FaRegHandPointLeft } from "react-icons/fa6";

export const RouletteModal = () => {
	const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

	const handleOpen = async () => {
		setModalOpen(true);
	};

	return (
		<>
			<FaArrowRightLong size={50} className="mr-10 icon-blink icon-blink-color" />
			<Button onClick={handleOpen} className="bg-blue-500 text-white uppercase px-4 py-2  rounded-md hover:bg-blue-800">
				<FaRegHandPointRight />
				Gira la ruleta
				<FaRegHandPointLeft />
			</Button>
			<FaArrowLeftLong size={50} className="ml-10 icon-blink icon-blink-color" />

			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900 rounded-lg shadow-lg text-white">
					<DialogHeader className="text-center">
						<DialogTitle className="text-2xl font-bold">¡Gira la Ruleta!</DialogTitle>
						<DialogDescription className="text-lg mt-2 text-neutral-300">Descubre descuentos increíbles y premios especiales. ¡Es tu oportunidad de ganar!</DialogDescription>
					</DialogHeader>
					<div className="mt-4 flex justify-center items-center">
						<Roulette />
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
