import Validador from "../utils/Validador";
import Erros from "../constants/Erros";

export default class NomePessoa {
  readonly nome: string;

  constructor(nome: string) {
    this.nome = nome?.trim();

    const errosRecebidos = NomePessoa.combinarErros(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO),
      Validador.tamanhoMaiorQue(this.nome, 6, Erros.NOME_PEQUENO),
      Validador.tamanhoMenorQue(this.nome, 60, Erros.NOME_GRANDE),
    );
    if (errosRecebidos) throw new Error(errosRecebidos.join(", "));
  }

  static combinarErros(...erros: (string | null)[]): string[] | null {
    const errosfiltrados = erros.filter((erro) => erro !== null) as string[];
    return errosfiltrados.length > 0 ? errosfiltrados : null;
  }
}
