import Validador from "../../../src/core/utils/Validador";

test("Deve retornar um valor valido ", () => {
  const nome = "Rodrigo";
  expect(Validador.naoNulo(nome, "O nome e obrigatorio")).toBeNull();
});

test("Deve verificar se o valor e null", () => {
  const resultado = Validador.naoNulo(null, "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});

test("Deve verificar se o valor e undefined", () => {
  const resultado = Validador.naoNulo(undefined, "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});

test("Deve verificar se o valor e null", () => {
  const resultado = Validador.naoVazio(null, "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});

test("Deve verificar se o valor e undefined", () => {
  const resultado = Validador.naoVazio(undefined, "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});

test("Deve retornar o erro para string vazia", () => {
  const resultado = Validador.naoVazio("", "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});
test("Deve retornar null para uma string nao vazia", () => {
  const resultado = Validador.naoVazio("Rodrigo", "Valor invalido");
  expect(resultado).toBe(null);
});

test("Deve retornar erro para string contendo apenas espaço", () => {
  const resultado = Validador.naoVazio("      ", "Valor invalido");
  expect(resultado).toBe("Valor invalido");
});

test("Deve retornar null para string com espaços nas extremidades", () => {
  const resultado = Validador.naoVazio("   Rodrigo  ", "Valor invalido");
  expect(resultado).toBe(null);
});

test("Deve verificar se o nome e valido", () => {
  const resultado = Validador.tamanhoMenorQue("Rodrigo", 10, "Nome invalido");
  expect(resultado).toBeNull();
});

test("Deve verificar se o nome e invalido", () => {
  const resultado = Validador.tamanhoMenorQue("Rodrigo de Souza Borges", 10, "Nome invalido");
  expect(resultado).toBe("Nome invalido");
});

test("Deve verificar se o nome e valido", () => {
  const resultado = Validador.tamanhoMaiorQue("Rodrigo", 4, "Nome invalido");
  expect(resultado).toBeNull();
});

test("Deve verificar se o nome e invalido", () => {
  const resultado = Validador.tamanhoMaiorQue("Ro", 4, "Nome invalido");
  expect(resultado).toBe("Nome invalido");
});

test("Deve retornar null quando o valor seguir a regex", () => {
  const resultado = Validador.regex("12345", /^\d+$/, "Valor inválido");

  expect(resultado).toBeNull();
});

test("Deve retornar erro quando o valor não seguir a regex", () => {
  const resultado = Validador.regex("abc", /^\d+$/, "Valor inválido");

  expect(resultado).toBe("Valor inválido");
});

test("Deve retornar true para para o email correto", () => {
  const email = Validador.isEmailValido("borgesrodrigo2024@outlook.com");
  expect(email).toBe(true);
});

test("Deve retornar false para para o email incorreto", () => {
  const email = Validador.isEmailValido("borgesrodrigo2024@outlook");
  expect(email).toBe(false);
});

test("Deve combinar os erros", () => {
  const erros = Validador.combinar(
    Validador.naoVazio("", "erro1"),
    Validador.naoVazio("", "erro2"),
    Validador.naoVazio("", "erro3"),
    Validador.naoVazio("Teste", "nao erro4"),
    Validador.naoVazio("", "erro"),
  );

  expect(erros?.join(", ")).toBe("erro1, erro2, erro3, erro");
});

test("Deve combinar sem  erros", () => {
  const erros = Validador.combinar(
    Validador.naoVazio("Bom dia", "erro1"),
    Validador.naoVazio("Boa tarde", "erro2"),
    Validador.naoVazio("Boa noite", "erro3"),
  );

  expect(erros).toBe(null);
});
