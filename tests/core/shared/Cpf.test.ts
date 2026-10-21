import Cpf from "../../../src/core/shared/Cpf";
import Erros from "../../../src/core/constants/Erros";
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

test("Deve criar cpf removendo caracteres de formataçao", () => {
  const cpf = new Cpf("529.982.247-25");
  expect(cpf.valor).toBe("52998224725");
});

test("Deve retornar cpf formatado", () => {
  const cpf = new Cpf("52998224725");
  expect(cpf.formatado).toBe("529.982.247-25");
});

test("Deve retornar o digito verificador", () => {
  const cpf = new Cpf("52998224725");
  expect(cpf.digitoVerificador).toBe("25");
});

test("Deve lançar erro para cpf invalido", () => {
  expect(() => {
    new Cpf("12345678900");
  }).toThrow(Erros.CPF_INVALIDO);
});

test("Deve lançar erro quando o cpf nao for informado", () => {
  expect(() => {
    new Cpf();
  }).toThrow(Erros.CPF_INVALIDO);
});
