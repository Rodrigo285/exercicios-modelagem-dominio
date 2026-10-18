import Cpf from "../../../src/core/shared/Cpf";
test("Deve retornar cpf invalido (false) para string vazia", () => {
  expect(Cpf.isValido("")).toBe(false);
});

test("Deve retornar cpf invalido (false) para string incompleta", () => {
  expect(Cpf.isValido("123")).toBe(false);
  expect(Cpf.isValido("1234")).toBe(false);
  expect(Cpf.isValido("1234567")).toBe(false);
  expect(Cpf.isValido("123.456.789-0")).toBe(false);
});

test("Deve retornar cpf valido", () => {
  expect(Cpf.isValido("218.022.018-90")).toBeTruthy();
});

test("Deve retornar cpf invalido (false) para dv invalido", () => {
  expect(Cpf.isValido("123.456.789-0")).toBe(false);
});

test("deve retornar cpf validdo (true) para dv valido", () => {
  expect(Cpf.isValido("280.012.389-38")).toBeTruthy();
  expect(Cpf.isValido("346.885.650-46")).toBeTruthy();
  expect(Cpf.isValido("028.777.810-03")).toBeTruthy();
  expect(Cpf.isValido("088.535.530-06")).toBeTruthy();
});
