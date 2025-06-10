function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });

  testar("COMPONENT - Formulário dispara evento de submit", () => {
    const form = document.getElementById("form");
    let chamado = false;

    const listener = (e) => {
      chamado = true;
      e.preventDefault();
      form.removeEventListener("submit", listener);
    };

    form.addEventListener("submit", listener);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado");
  });
}
