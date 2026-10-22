import Porcentagem from "../../../src/core/shared/Porcentagem";
import Erros from "../../../src/core/constants/Erros";

test("Deve lancar um erro ao criar porcentagem menor de que zero", () => {
  expect(() => Porcentagem.create(-10)).toThrow(Erros.PORCENTAGEM_INVALIDA);
});

test("Deve lancar erro tentar criar porcentagem maior que 100", () => {
  expect(() => Porcentagem.create(120)).toThrow(Erros.PORCENTAGEM_INVALIDA);
});

test("Deve retornar true para porcentagem valida", () => {
  const porcentagem = Porcentagem.create(10);
  expect(porcentagem.porcentagem).toBe(10);
});

test("Deve aplicar porcentagem sobre o valor", () => {
  const porcent = Porcentagem.create(10);
  expect(porcent.aplicarSobre(100)).toBe(10);
});

test("Deve retornar a soma das porcentagem", () => {
  const porcent1 = Porcentagem.create(10);
  const porcent2 = Porcentagem.create(25);
  expect(porcent1.somar(porcent2).porcentagem).toBe(35);
});

test("Deve verificar se as porcentagens sao iguais", () => {
  const porcent1 = Porcentagem.create(10);
  const porcent2 = Porcentagem.create(10);
  expect(porcent1.igual(porcent2)).toBe(true);
});

test("Deve retornar falso para a comparaçao das porcentagens", () => {
  const porcent1 = Porcentagem.create(10);
  const porcent2 = Porcentagem.create(20);
  expect(porcent1.igual(porcent2)).toBe(false);
});
