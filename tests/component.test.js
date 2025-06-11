function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });

  testar("COMPONENT - Quantidade de giros deve estar presente na página", () => {
    const result = document.getElementById("resultado")
    if (!result) throw new Error("Resultado não encontrado")
  });

  testar("COMPONENT - Botão calcular funciona", () => {

    const input = document.getElementById("primogemas")
    if (!input) throw new Error("Quantidade de primogemas não encontrado")

    input.value = 320
    
    const form = document.getElementById("form")
    const botao = form.querySelector('button[type="submit"]');
    if (!botao) throw new Error("Botão calcular não encontrado")

    botao.click()

    const result = document.getElementById("resultado")
    if (!result) throw new Error("Resultado não encontrado")
  })
}
