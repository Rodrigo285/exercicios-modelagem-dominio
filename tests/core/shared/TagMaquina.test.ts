import TagMaquina from "../../../src/core/shared/TagMaquina";
import Erros from "../../../src/core/constants/Erros";

test("Deve criar um tag valida", () => {
  const tag = TagMaquina.create("IJ-0305");
  expect(tag.valor).toBe("IJ-0305");
});

test("Deve lançar um erro", () => {
  expect(() => TagMaquina.create("ij-0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro", () => {
  expect(() => TagMaquina.create("IJ-305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro", () => {
  expect(() => TagMaquina.create("IJ0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro para mais de duas letras", () => {
  expect(() => TagMaquina.create("ABCD-0305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve lançar um erro para mais de quatro numeros", () => {
  expect(() => TagMaquina.create("IJ-000305")).toThrow(Erros.TAG_INVALIDA);
});

test("Deve retornar verdadeiro para o valor das tag", () => {
  const tag1 = TagMaquina.create("IJ-0305");
  const tag2 = TagMaquina.create("IJ-0305");
  expect(tag1.iguais(tag2)).toBe(true);
});

test("Deve retornar falso para o valor das tag", () => {
  const tag1 = TagMaquina.create("IJ-0305");
  const tag2 = TagMaquina.create("IJ-0306");
  expect(tag1.iguais(tag2)).toBe(false);
});

test("Deve criar obejtos diferentes mesmo com o mesmo valor", () => {
  const tag1 = TagMaquina.create("IJ-0305");
  const tag2 = TagMaquina.create("IJ-0305");
  expect(tag1).not.toBe(tag2);
});
