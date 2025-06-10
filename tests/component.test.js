function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });

  testar("COMPONENT - Quantidade de giros deve estar presente na página", () => {
    const result = document.getElementById("resultado")
    if (!result) throw new Error("Resultado não encontrado")
  });

  testar("COMPONENT - Botão executa o cálculo dos giros", () => {
    const from = getElementById("form")
    
    if (!from) throw new Error("Resultado não encontrado")
  })


}
