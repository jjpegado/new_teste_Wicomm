import { formatCurrency, products } from "../data/products";

const carouselIds = ["best", "fragrance", "routine"];

/**
 * Monta os cards e adiciona controles de navegação a cada vitrine.
 * Os produtos são repetidos de propósito para demonstrar a navegação
 * sem precisar cadastrar itens fictícios adicionais.
 */
export function renderProducts(): void {
    carouselIds.forEach((carouselId) => {
        const productGrid = document.getElementById(carouselId);

        if (!productGrid) {
            return;
        }

        const carousel = document.createElement("div");
        carousel.className = "carousel";

        const previousButton = document.createElement("button");
        previousButton.className = "carousel-arrow carousel-arrow--previous";
        previousButton.type = "button";
        previousButton.setAttribute("aria-label", "Mostrar produtos anteriores");
        previousButton.innerHTML = "&#10094;";

        const nextButton = document.createElement("button");
        nextButton.className = "carousel-arrow carousel-arrow--next";
        nextButton.type = "button";
        nextButton.setAttribute("aria-label", "Mostrar próximos produtos");
        nextButton.innerHTML = "&#10095;";

        productGrid.classList.add("product-grid");
        productGrid.setAttribute("aria-label", "Lista de produtos");

        const carouselItems = [...products, ...products];

        productGrid.innerHTML = carouselItems
            .map(
                (product) => `
                    <article class="product">
                        <button
                            class="product-card-button"
                            type="button"
                            data-add="${product.id}"
                            aria-label="Adicionar ${product.name} ao carrinho"
                        >
                            <span class="photo">
                                <img src="${product.image}" alt="${product.name}">
                                <span class="add-product-icon" aria-hidden="true">+</span>
                            </span>

                            <span class="product-category">PERFUMARIA</span>
                            <span class="product-name">${product.name}</span>
                            <del>${formatCurrency(product.price + 20)}</del>
                            <strong>${formatCurrency(product.price)}</strong>
                            <span class="installments">ou em até 3x sem juros</span>
                        </button>
                    </article>
                `,
            )
            .join("");

        productGrid.parentElement?.insertBefore(carousel, productGrid);
        carousel.append(previousButton, productGrid, nextButton);

        const scrollCarousel = (direction: number): void => {
            const card = productGrid.querySelector<HTMLElement>(".product");

            if (!card) {
                return;
            }

            const gap = 9;
            const distance = (card.offsetWidth + gap) * 5;

            productGrid.scrollBy({
                left: distance * direction,
                behavior: "smooth",
            });
        };

        previousButton.addEventListener("click", () => scrollCarousel(-1));
        nextButton.addEventListener("click", () => scrollCarousel(1));
    });
}
