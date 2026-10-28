import Erros from "../constants/Erros";
import Validador from "../utils/Validador";
export default class Cep {
  static readonly REGEX = /^\d{8}$/;
  readonly valor: string;

  private constructor(valor: string) {
    const cepNormalizado = valor.trim();
    if (!Cep.isValido(cepNormalizado)) throw new Error(Erros.CEP_INVALIDO);
    this.valor = cepNormalizado;
  }

  static create(valor: string): Cep {
    return new Cep(valor);
  }

  static isValido(valor: string): boolean {
    const erro = Validador.regex(valor, Cep.REGEX, Erros.CEP_INVALIDO);
    return erro === null;
  }

  get numero() {
    return this.valor;
  }
}
