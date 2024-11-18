"use server";

export async function getProducts() {
	try {
		const response = await fetch("https://fakestoreapi.com/products");
		if (!response.ok) {
			throw new Error("Error al obtener los productos");
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
}
