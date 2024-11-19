import Image from "next/image";
import { Product, ProductItem } from "@/interfaces/product-interface";
import { useCartStore } from "@/store/card-stote";
import { useToast } from "@/hooks/use-toast";
import { FaCartPlus } from "react-icons/fa6";
import { Button } from "../ui/button";

interface ProductCardProps {
	product: ProductItem;
}

export const ProductCard = ({ product }: ProductCardProps) => {
	const addProduct = useCartStore((state) => state.addProduct);
	const { toast } = useToast();
	const handleAddToCart = (product: Product) => {
		addProduct(product); // Acción del carrito
		toast({
			title: "Producto agregado",
			description: `El producto ${product.title} fue agregado al carrito correctamente. `,
			className: "bg-green-500 text-white border border-green-700 rounded-lg shadow-md text-center flex flex-col items-center justify-center",
		});
	};

	return (
		<div key={product.id} className="max-w-sm mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<div className="flex justify-center items-center h-full w-full ml-4">
						<Image src={product.image} alt={product.title} width={100} height={100} className="object-contain" />
					</div>
				</div>
				<div className="p-8">
					<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
						{product.title}
					</a>
					<p className="mt-2 text-gray-500">{product.description}</p>
					<div className="mt-4 grid grid-cols-3 max-sm:grid-cols-1">
						<p className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
							ID: <span className="font-bold">{product.id}</span>
						</p>
						<p className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
							Rating: <span className="font-bold">{product.rating.rate}</span>
						</p>
						<p className="text-gray-600 uppercase tracking-wide text-sm font-semibold">
							Precio: <span className="font-bold">${product.price}</span>
						</p>
					</div>
				</div>
			</div>
			<Button
				onClick={() => handleAddToCart({ ...product, quantity: 1 })}
				className=" flex justify-center items-center uppercase mt-4 px-4 py-2 w-full  bg-blue-500 text-white  hover:bg-blue-700"
			>
				<FaCartPlus />
				Agregar al carrito
			</Button>
		</div>
	);
};
