import {mostrar_canntidad, precioxcantidad} from "./totalizador.js";
//import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Mostrar cantidad de items de 4", () => {
    expect(mostrar_canntidad(4)).toEqual(4);
  });

  it("Mostrar cantidad de items", () => {
    expect(mostrar_canntidad(5)).toEqual(5);
  });

  it("Mostrar precio de 2 items con costo de 2000", () => {
    expect(precioxcantidad(2,2000)).toEqual(4000);
  });

  it("Mostrar precio por cantidad", () => {
    expect(precioxcantidad(3,1500)).toEqual(4500);
  });

});
