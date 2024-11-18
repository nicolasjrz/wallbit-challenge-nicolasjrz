"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import Roulette from "../roulette/Roulette";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export const RouletteModal = () => {
	const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

	const handleOpen = async () => {
		setModalOpen(true);
	};

	return (
		<>
			<FaArrowRightLong size={50} className="mr-10 icon-blink icon-blink-color" />
			<Button onClick={handleOpen} className="bg-blue-500 text-white uppercase px-4 py-2  rounded-md hover:bg-blue-800">
				Gira la ruleta
			</Button>
			<FaArrowLeftLong size={50} className="ml-10 icon-blink icon-blink-color" />

			<Dialog open={isModalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-neutral-900 ">
					<DialogHeader>
						<DialogTitle>Gira la ruleta </DialogTitle>
						<DialogDescription>Obtendras descuentos maravillosos</DialogDescription>
					</DialogHeader>
					<Roulette />
				</DialogContent>
			</Dialog>
		</>
	);
};
