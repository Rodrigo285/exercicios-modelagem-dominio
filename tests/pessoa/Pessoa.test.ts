import Pessoa from "../../src/core/pessoa/Pessoa";
import Erros from "../../src/core/constants/Erros";

test("Deve lancar erro ao tentar criar uma pessoa com nome vazio", () => {
  expect(() => new Pessoa("")).toThrow(Erros.NOME_VAZIO);
});

test("Deve criar uma pessoa valida", () => {
  const pessoa = new Pessoa("Pedro Augusto Soares");
  expect(pessoa.nome.primeiroNome).toBe("Pedro");
  expect(pessoa.id.novo).toBeTruthy();
});
