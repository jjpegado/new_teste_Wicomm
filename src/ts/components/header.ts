export function initHeader(): void {
    const menuButton = document.querySelector<HTMLButtonElement>(".menu-btn");
    const mobileMenu = document.querySelector<HTMLElement>(".mobile-nav");

    menuButton?.addEventListener("click", () => {
        if (mobileMenu) {
            mobileMenu.hidden = !mobileMenu.hidden;
        }
    });

    const searchForm = document.querySelector<HTMLFormElement>(".search");

    searchForm?.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();
        document.querySelector("#products")?.scrollIntoView({
            behavior: "smooth",
        });
    });
}
