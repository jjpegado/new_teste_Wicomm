export function initMain(): void {
    const newsletterForm =
        document.querySelector<HTMLFormElement>(".newsletter form");

    newsletterForm?.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        const feedback = document.querySelector<HTMLElement>(".feedback");

        if (feedback) {
            feedback.textContent =
                "Cadastro realizado nesta demonstração!";
        }
    });
}
