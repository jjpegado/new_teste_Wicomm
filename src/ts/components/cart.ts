import { formatCurrency, products } from "../data/products";

type CartItem = {
    productId: number;
    quantity: number;
};

export function initCart(): void {
    const cartItems = new Map<number, number>();

    const cart = document.querySelector<HTMLElement>(".cart");
    const overlay = document.querySelector<HTMLElement>(".overlay");
    const itemsContainer = document.querySelector<HTMLElement>(".cart-items");
    const totalElement = document.querySelector<HTMLElement>(".total");

    const openCart = (): void => {
        cart?.classList.add("open");
        overlay?.classList.add("show");
    };

    const updateCart = (): void => {
        const totalQuantity = [...cartItems.values()].reduce(
            (total, quantity) => total + quantity,
            0,
        );

        let totalPrice = 0;

        document.querySelectorAll<HTMLElement>(".cart-count").forEach((counter) => {
            counter.textContent = String(totalQuantity);
        });

        if (itemsContainer) {
            if (cartItems.size === 0) {
                itemsContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
            } else {
                itemsContainer.innerHTML = [...cartItems.entries()]
                    .map(([productId, quantity]) => {
                        const product = products.find(
                            (item) => item.id === productId,
                        );

                        if (!product) {
                            return "";
                        }

                        const subtotal = product.price * quantity;
                        totalPrice += subtotal;

                        return `
                            <article class="cart-item">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="cart-item-info">
                                    <strong>${product.name}</strong>
                                    <span>${quantity} x ${formatCurrency(product.price)}</span>
                                    <b>${formatCurrency(subtotal)}</b>
                                </div>
                                <button
                                    class="remove-cart-item"
                                    type="button"
                                    data-remove="${product.id}"
                                    aria-label="Remover ${product.name} do carrinho"
                                >
                                    ×
                                </button>
                            </article>
                        `;
                    })
                    .join("");
            }
        }

        if (totalElement) {
            totalElement.textContent = formatCurrency(totalPrice);
        }
    };

    const closeCart = (): void => {
        cart?.classList.remove("open");
        overlay?.classList.remove("show");
    };

    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        const addButton = target.closest<HTMLButtonElement>("[data-add]");

        if (addButton) {
            const productId = Number(addButton.dataset.add);
            const currentQuantity = cartItems.get(productId) ?? 0;

            cartItems.set(productId, currentQuantity + 1);
            updateCart();
            openCart();
            return;
        }

        const removeButton = target.closest<HTMLButtonElement>("[data-remove]");

        if (removeButton) {
            const productId = Number(removeButton.dataset.remove);
            cartItems.delete(productId);
            updateCart();
        }
    });

    document.querySelector(".cart-open")?.addEventListener("click", openCart);
    document.querySelector(".cart-close")?.addEventListener("click", closeCart);
    overlay?.addEventListener("click", closeCart);

    updateCart();
}
