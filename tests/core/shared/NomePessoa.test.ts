import NomePessoa from "../../../src/core/shared/NomePessoa";
import Erros from "../../../src/core/constants/Erros";
import { notEqual } from "node:assert";

test("Deve lançar erro ao tentar criar nome vazio", () => {
  expect(() => new NomePessoa("")).toThrow(Erros.NOME_VAZIO);
});

test("Deve lançar erro ao tentar criar nome menor que 4 caracteres", () => {
  expect(() => new NomePessoa("LI z")).toThrow(Erros.NOME_PEQUENO);
});

test("Deve lançar erro ao tentar criar nome maior que 120 caracteres", () => {
  const nomeGigante =
    "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Habsburgo";
  expect(() => new NomePessoa(nomeGigante)).toThrow(Erros.NOME_GRANDE);
});

test("Deve lancar erro ao tentar criar nome sem sobrenome", () => {
  expect(() => new NomePessoa("Rodrigo ")).toThrow(Erros.NOME_SEM_SOBRENOME);
});

test("Deve lancar erro ao tentar criar nome com caractares especias", () => {
  expect(() => new NomePessoa("Joao @000Jao")).toThrow(Erros.NOME_CARACTERES_INVALIDOS);
});

test("Deve criar nome com sobrenome", () => {
  const nome = new NomePessoa("Joao Silva Pereira");
  expect(nome.completo).toBe("Joao Silva Pereira");
  expect(nome.primeiroNome).toBe("Joao");
  expect(nome.sobrenomes).toEqual(["Silva", "Pereira"]);
  expect(nome.ultimoSobrenome).toBe("Pereira");
});
