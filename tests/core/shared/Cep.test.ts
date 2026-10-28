import Erros from "../../../src/core/constants/Erros";
import Cep from "../../../src/core/shared/Cep";

test("Deve criar um Cep valido", () => {
  const cep = Cep.create("14780040");
  expect(cep).toBeInstanceOf(Cep);
});
test("Deve lancar error a criar cep com menos numeros", () => {
  expect(() => Cep.create("14780")).toThrow(Erros.CEP_INVALIDO);
});

test("Deve lancar error ao tentar criar cep com string vazia", () => {
  expect(() => Cep.create(" ")).toThrow(Erros.CEP_INVALIDO);
});

test("Deve retornar o numero do cep", () => {
  const cep = Cep.create("14780040");
  expect(cep.numero).toBe("14780040");
});
