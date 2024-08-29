import {mostrar_canntidad, precioxcantidad} from "./totalizador.js";
//import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Mostrar cantidad de items", () => {
    expect(mostrar_canntidad(4)).toEqual(4);
  });

  it("Mostrar cantidad de items para 5", () => {
    expect(precioxcantidad(2,2000)).toEqual(4000);
  });

});
