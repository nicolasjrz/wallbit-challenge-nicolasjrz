import { Product } from "@/interfaces/product-interface";
import { formatDate } from "@/utils/formatDate";
import { create } from "zustand";

interface CartState {
	products: Product[];
	discount: number;
	isCouponApplied: boolean;
	validCoupons: { code: string; discount: number }[];
	couponCode: string;
	createdAt: string | null; // Fecha de creación del carrito
	addProduct: (product: Product) => void;
	removeProduct: (id: number) => void;
	loadProducts: () => void;
	applyCoupon: (code: string) => { success: boolean; message: string };
	removeCoupon: () => void; // Para eliminar el cupón
	calculateTotal: () => number;
	getTotalItems: () => number; // Nueva función
	addQuantity: (id: number) => void;
	removeQuantity: (id: number) => void;
	clearCart: () => void; // Para eliminar el cupón
}

export const useCartStore = create<CartState>((set, get) => ({
	products: [],
	discount: 0,
	isCouponApplied: false,
	couponCode: "",
	createdAt: null, // Fecha inicial del carrito

	validCoupons: [
		{ code: "MILANESA", discount: 10 },
		{ code: "MAYONESA", discount: 20 },
		{ code: "GONCY", discount: 30 },
		{ code: "WALLBIT", discount: 50 },
		{ code: "NOCUPON", discount: 0 },
	],

	getTotalItems: () => {
		const { products } = get();
		return products.reduce((total, product) => total + product.quantity, 0);
	},

	addProduct: (product) =>
		set((state) => {
			const existingProductIndex = state.products.findIndex((p) => p.id === product.id);
			let updatedProducts;

			if (existingProductIndex !== -1) {
				// Producto existente, actualizar cantidad
				updatedProducts = state.products.map((p, index) => (index === existingProductIndex ? { ...p, quantity: p.quantity + product.quantity } : p));
			} else {
				// Producto nuevo, agregar al carrito
				updatedProducts = [...state.products, product];
			}

			// Actualizar fecha si el carrito estaba vacío
			const updatedCreatedAt = state.products.length === 0 ? formatDate(new Date().toISOString()) : state.createdAt;

			// Guardar productos y fecha en localStorage
			localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
			localStorage.setItem("cartCreatedAt", updatedCreatedAt || "");

			return { products: updatedProducts, createdAt: updatedCreatedAt };
		}),

	removeProduct: (id) =>
		set((state) => {
			const updatedProducts = state.products.filter((p) => p.id !== id);
			const updatedCreatedAt = updatedProducts.length === 0 ? null : state.createdAt;

			// Actualizar localStorage
			localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
			if (!updatedCreatedAt) {
				localStorage.removeItem("cartCreatedAt");
			}

			return { products: updatedProducts, createdAt: updatedCreatedAt };
		}),

	loadProducts: () => {
		const storedProducts = localStorage.getItem("cartProducts");
		const storedCreatedAt = localStorage.getItem("cartCreatedAt");

		if (storedProducts) {
			set({
				products: JSON.parse(storedProducts),
				createdAt: storedCreatedAt || null,
			});
		}

		const savedCoupon = localStorage.getItem("coupon");
		if (savedCoupon) {
			const { validCoupons } = get();
			const coupon = validCoupons.find((c) => c.code === savedCoupon);
			if (coupon) {
				set({ discount: coupon.discount, isCouponApplied: true });
			}
		}
	},

	applyCoupon: (code) => {
		const { validCoupons, isCouponApplied } = get();

		if (isCouponApplied) {
			return { success: false, message: "El cupón ya ha sido aplicado." };
		}

		const normalizedCode = code.toUpperCase();
		const coupon = validCoupons.find((c) => c.code === normalizedCode);

		if (coupon) {
			set({ discount: coupon.discount, isCouponApplied: true, couponCode: normalizedCode });
			localStorage.setItem("coupon", normalizedCode);
			return { success: true, message: `Cupón aplicado: ${coupon.discount}% de descuento.` };
		} else {
			return { success: false, message: "El cupón es inválido." };
		}
	},

	removeCoupon: () => {
		set({ discount: 0, isCouponApplied: false, couponCode: "" });
		localStorage.removeItem("coupon");
	},

	calculateTotal: () => {
		const { products, discount } = get();
		const subtotal = products.reduce((total: number, product: Product) => total + product.price * product.quantity, 0);
		const total = subtotal - (subtotal * discount) / 100;
		return total;
	},

	addQuantity: (id: number) => {
		set((state) => {
			const updatedProducts = state.products.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
			localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	},

	removeQuantity: (id: number) => {
		set((state) => {
			const updatedProducts = state.products.map((p) => (p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p));
			localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	},
	// Acción para borrar todo el carrito
	clearCart: () =>
		set(() => {
			// Eliminar todos los productos y restablecer el estado del carrito
			localStorage.removeItem("cartProducts");
			localStorage.removeItem("cartCreatedAt");

			return { products: [], createdAt: null, discount: 0, isCouponApplied: false };
		}),
}));
