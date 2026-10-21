import Erros from "../constants/Erros";
export default class Porcentagem {
  readonly porcentagem: number;

  private constructor(porcentagem: number) {
    if (porcentagem < 0 || porcentagem > 100) {
      throw new Error(Erros.PORCENTAGEM_INVALIDA);
    }
    this.porcentagem = porcentagem;
  }

  static create(porcentagem: number): Porcentagem {
    return new Porcentagem(porcentagem);
  }

  aplicarSobre(valor: number): number {
    return (valor * this.porcentagem) / 100;
  }

  somar(outraPorcentagem: Porcentagem): Porcentagem {
    return Porcentagem.create(this.porcentagem + outraPorcentagem.porcentagem);
  }

  igual(outraPorcentagem: Porcentagem): boolean {
    return this.porcentagem === outraPorcentagem.porcentagem;
  }
}
