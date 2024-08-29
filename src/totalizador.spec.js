import totalizadorventas from "./totalizador.js";
import total from "./totalizador.js";

describe("Totalizador", () => {
  it("Mostrar cantidad de items", () => {
    expect(totalizadorventas(4)).toEqual(4);
  });
});
