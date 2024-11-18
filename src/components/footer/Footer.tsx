import React from "react";

export const Footer = () => {
	return (
		<footer className="m-auto pt-4 text-center text-sm  ">
			<p>
				{new Date().getFullYear()} Creado por{" "}
				<a href="#" className="text-blue-400 hover:text-blue-600">
					Nicolasjrz &reg;
				</a>
			</p>
		</footer>
	);
};
