export interface Product {
	id: number;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

export interface ProductItem {
	id: number;
	title: string;
	description: string;
	price: number;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
