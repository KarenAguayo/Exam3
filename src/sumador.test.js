import cambio from "./sumador.js";

describe("Cambio", () => {
  it("deberia calcular el cambio", () => {
    expect(cambio(3, 2)).toEqual(1);
  });
});
