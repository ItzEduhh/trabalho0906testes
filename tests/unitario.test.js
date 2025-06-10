// Função que roda todos os testes
function runUnitTests() {
  // Testes de soma

  testar("UNIT - Quantidade de primogemas para 0 giros", () => {
    if (calcularGiros(159) !== 0) throw new Error("Esperado 0 giros para menos de 160 primogemas");
  });

  testar("UNIT - Quantidade de primogemas para 1 giros", () => {
    if (calcularGiros(160) !== 1) throw new Error("Esperado 1 giros para exatas 160 primogemas");
  });

  testar("UNIT - Quantidade de primogemas para 2 giros", () => {
    if (calcularGiros(320) !== 2) throw new Error("Esperado 2 giros para exatas 320 primogemas");
  });

  testar("UNIT - Input de primogemas aceita apenas números", () => {
    const input = quantidadeDePrimogemas();
      if (!IsNaN(input)) throw new Error("Esperado um número")
  });
}
