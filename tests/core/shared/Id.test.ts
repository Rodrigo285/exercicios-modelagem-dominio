import Id from "../../../src/core/shared/Id";
import Erros from "../../../src/core/constants/Erros";

test("Deve criar um id valido", () => {
  const id = Id.novo;
  expect(id.valor).toHaveLength(36);
  expect(id.novo).toBeTruthy();
});

test("Deve lançar erro ao tentar criar um id invalido", () => {
  expect(() => new Id("123")).toThrow(Erros.ID_INVALIDO);
});

test("Deve criar um id valido apartir de um id existente", () => {
  const valor = Id.novo.valor;
  const id = new Id(valor);
  expect(id.valor).toHaveLength(36);
  expect(id.novo).toBeFalsy();
});
