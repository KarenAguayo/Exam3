import cambio from "./sumador.js";

describe("Cambio", () => {
  it("deberia calcular el cambio", () => {
    expect(cambio(2, 3)).toEqual(1);
  });
  it("venta deberia ser menor a efectivo", () =>{
    expect(cambio(3, 2)).toEqual(-1);
  })
});
