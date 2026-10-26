import Validador from "../utils/Validador";
import Erros from "../constants/Erros";

export default class Telefone {
  static readonly REGEX = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;
  readonly valor: string;

  private constructor(valor: string) {
    const numeroNormalizado = valor.trim();

    if (!Telefone.telIsValido(numeroNormalizado))
      throw new Error(Erros.TELEFONE_INVALIDO);

    this.valor = numeroNormalizado;
  }

  static create(numero: string): Telefone {
    return new Telefone(numero);
  }

  static telIsValido(numero: string): boolean {
    const erro = Validador.regex(numero, this.REGEX, Erros.TELEFONE_INVALIDO);
    return erro === null;
  }

  get ddd(): string {
    const numerolimpo = this.valor.replace(/\D/g, "");
    return numerolimpo!.slice(0, 2);
  }

  get numero(): string {
    const numerolimpo = this.valor.replace(/\D/g, "");
    return numerolimpo!.slice(2, numerolimpo.length);
  }
}
