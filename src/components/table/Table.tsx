import { useCartStore } from "@/store/card-stote";
import Image from "next/image";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export const Table = () => {
	const products = useCartStore((state) => state.products);
	const removeProduct = useCartStore((state) => state.removeProduct);
	const addQuantity = useCartStore((state) => state.addQuantity);
	const removeQuantity = useCartStore((state) => state.removeQuantity);

	return (
		<div className="flex items-center justify-center ">
			<div className="p-5 h-[600px] w-full px-0 max-sm:max-h-[600px] max-sm:overflow-y-auto overflow-x-auto ">
				{products.length === 0 ? (
					<div className="flex flex-col justify-center items-center h-full p-4  rounded-md">
						<p>El carrito está vacío.</p>
						<p>Agrega productos para continuar.</p>

						<FaCartPlus size={40} className="my-2" />
					</div>
				) : (
					<table className="table-auto  text-left min-w-full bg-neutral-700 bg-opacity-40 rounded-sm">
						<thead>
							<tr>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4">
									<p className="block antialiased font-sans text-sm font-semibold leading-none">Foto</p>
								</th>

								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4">
									<p className="block antialiased font-sans text-sm font-semibold leading-none">Nombre</p>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4">
									<p className="block antialiased font-sans text-sm font-semibold leading-none">Cantidad</p>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4 px-2">
									<p className="block antialiased font-sans text-sm font-semibold leading-none">Precio U</p>
								</th>
								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4 px-2">
									<p className="block antialiased font-sans text-sm font-semibold leading-none">Precio T</p>
								</th>

								<th className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4">
									<p className="block antialiased font-sans text-sm font-semibold leading-none"></p>
								</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product.id}>
									<td className="p-4 border-b border-blue-gray-50">
										<div className="flex items-center gap-3">
											<div className=" w-12 rounded-md border border-blue-gray-50 ">
												<Image
													src={product.image}
													alt="producto"
													className="inline-block relative object-center !rounded-none h-full w-full object-cover "
													width={100}
													height={100}
												/>
											</div>
										</div>
									</td>
									<td className="p-4 border-b border-blue-gray-50">
										<p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal max-sm:text-xs">{product.title}</p>
									</td>
									<td className="p-4 border-b border-blue-gray-50">
										<div className="flex items-center gap-3">
											<button onClick={() => removeQuantity(product.id)} className="px-2 py-1 rounded-md bg-blue-500  hover:bg-blue-600">
												<FaMinus />
											</button>
											<p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{product.quantity}</p>
											<button onClick={() => addQuantity(product.id)} className="px-2 py-1  rounded-md bg-blue-500  hover:bg-blue-600">
												<FaPlus />
											</button>
										</div>
									</td>
									<td className="p-4 border-b border-blue-gray-50">
										<p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{product.price}</p>
									</td>
									<td className="p-4 border-b border-blue-gray-50">
										<p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{(product.quantity * product.price).toFixed(2)}</p>
									</td>

									<td className="p-4 border-b border-blue-gray-50">
										<button
											className="font-sans font-medium text-center text-xs  px-2 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
											type="button"
											onClick={() => removeProduct(product.id)}
										>
											<FaTrashCan />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};
