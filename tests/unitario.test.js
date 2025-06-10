// Função que roda todos os testes
function runUnitTests() {
  // Testes de funcionalidade

  function calcularGiros(primogemas) {
    return Math.floor(primogemas / 160);
  }

  function quantidadeDePrimogemas() {
    return Number(document.getElementById("primogemas").value);
  }


  testar("UNIT - Quantidade de primogemas para 0 giros", () => {
    if (calcularGiros(159) !== 0) throw new Error("Esperado 0 giros para menos de 160 primogemas");
  });

  testar("UNIT - Quantidade de primogemas para 1 giros", () => {
    if (calcularGiros(160) !== 1) throw new Error("Esperado 1 giros para exatas 160 primogemas");
  });

  testar("UNIT - Quantidade de primogemas para 2 giros", () => {
    if (calcularGiros(320) !== 2) throw new Error("Esperado 2 giros para exatas 160 primogemas");
  });

  testar("UNIT - Input de primogemas aceita apenas números", () => {
    const input = quantidadeDePrimogemas();
      if (isNaN(input)) throw new Error("Esperado um número")
  });

}
