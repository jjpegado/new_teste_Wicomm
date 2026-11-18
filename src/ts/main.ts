import "../styles/main.css";

import { initCart } from "./components/cart";
import { initHeader } from "./components/header";
import { initMain } from "./components/main";
import { renderProducts } from "./components/products";

/**
 * Carrega um partial HTML dentro do elemento correspondente.
 */
async function loadPartial(
    elementId: string,
    partialPath: string,
): Promise<void> {
    const container = document.getElementById(elementId);

    if (!container) {
        throw new Error(`Elemento não encontrado: #${elementId}`);
    }

    const response = await fetch(partialPath);

    if (!response.ok) {
        throw new Error(`Não foi possível carregar: ${partialPath}`);
    }

    container.innerHTML = await response.text();
}

/**
 * Inicializa a página depois de carregar header, conteúdo e rodapé.
 */
async function initializePage(): Promise<void> {
    const base = import.meta.env.BASE_URL;

    await Promise.all([
        loadPartial("header-root", `${base}src/partials/header.html`),
        loadPartial("main-root", `${base}src/partials/main.html`),
        loadPartial("footer-root", `${base}src/partials/footer.html`),
    ]);

    renderProducts();
    initHeader();
    initCart();
    initMain();
}

initializePage().catch((error: unknown) => {
    console.error("Erro ao iniciar a página:", error);
});
