import Maquina from "../../../src/core/maquina/Maquina";
import { TipoMaquina } from "../../../src/core/maquina/TipoMaquina";
import TagMaquina from "../../../src/core/shared/TagMaquina";

test("Deve retornar um obejto de maquina valido", () => {
  const tag = TagMaquina.create("IJ-0305");
  const injetora = {
    tag: tag,
    tipo: TipoMaquina.INJETORA,
    marca: "Tederic",
    modelo: "Trx 188F",
    fornecedor: "Pavan Zanetti",
    dataFabricacao: new Date(1, 10, 2000),
  };
  const maquina1 = new Maquina(injetora);
  expect(maquina1).toBeTruthy();
});

// test("Deve retornar um obejto invalido", () => {
//   const tag = new TagMaquina.create("");
//   const injetora = {
//     tag: tag,
//     tipo: "Injetora",
//     marca: "Tederic",
//     modelo: "Trx 188F",
//     fornecedor: "Pavan Zanetti",
//     dataFabricacao: new Date(1, 10, 2000),
//   };

//   expect(() => new Maquina(injetora)).toThrow(Erros.TAG_INVALIDA);
// });
