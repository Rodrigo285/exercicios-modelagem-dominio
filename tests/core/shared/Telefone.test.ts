import Erros from "../../../src/core/constants/Erros";
import Telefone from "../../../src/core/shared/Telefone";

test("Deve lançar um erro ao tentar criar um telefone incompleto", () => {
  expect(() => Telefone.create("987561234")).toThrow(Erros.TELEFONE_INVALIDO);
});

test("Deve retornar o objeto esperado", () => {
  const tel = Telefone.create("11987652345");
  expect(tel.valor).toBe("11987652345");
});

test("Deve retornar o ddd", () => {
  const tel = Telefone.create("17981073287");
  expect(tel.ddd).toBe("17");
});

test("Deve retornar o numero", () => {
  const tel = Telefone.create("17981073287");
  expect(tel.numero).toBe("981073287");
});
