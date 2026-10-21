import Validador from "../utils/Validador";
import Erros from "../constants/Erros";

export default class TagMaquina {
  readonly valor: string;

  private constructor(valor: string) {
    if (Validador.regex(valor, /^[A-Z]{2}-\d{4}$/, Erros.TAG_INVALIDA) !== null) {
      throw new Error(Erros.TAG_INVALIDA);
    }
    this.valor = valor;
  }

  iguais(outra: TagMaquina): boolean {
    return this.valor === outra.valor;
  }

  static create(valor: string): TagMaquina {
    return new TagMaquina(valor);
  }
}
