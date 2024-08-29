import totalizadorventas from "./totalizador.js";
import total from "./totalizador.js";

describe("Totalizador", () => {
  it("Mostrar cantidad de items", () => {
    expect(totalizadorventas(4)).toEqual(4);
  });

  it("Mostrar cantidad de items para 5", () => {
    expect(totalizadorventas(5)).toEqual(5);
  });
});
