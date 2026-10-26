import Email from "../../../src/core/shared/Email";
import Erros from "../../../src/core/constants/Erros";
import { get } from "node:http";
test("Verificar se um email valido e criado", () => {
  expect(Email.validarEmail("rodrigo@email.com")).toBe(true);
});

test("Deve lançar erro par email invalido", () => {
  expect(() => Email.create("rodrigoemail.com")).toThrow(Erros.EMAIL_INVALIDO);
});

test("Deve verificar se o objeto email foi criado", () => {
  expect(Email.create("rodrigo@email.com")).toBeInstanceOf(Email);
});

test("Deve retornar o usuario do email", () => {
  const email = Email.create("rodrigo@email.com");
  expect(email.usuario).toBe("rodrigo");
});

test("Deve retornar o dominio do email", () => {
  const email = Email.create("rodrigo@email.com");
  expect(email.dominio).toBe("email.com");
});
