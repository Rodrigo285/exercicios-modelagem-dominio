import Erros from "../constants/Erros";
import Validador from "../utils/Validador";

export default class Email {
  readonly email: string;
  static readonly REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  private constructor(email: string) {
    const emailNormalizado = email.trim();

    if (!Email.validarEmail(emailNormalizado))
      throw new Error(Erros.EMAIL_INVALIDO);

    this.email = emailNormalizado;
  }

  static validarEmail(email: string): boolean {
    const erro = Validador.regex(email, this.REGEX, Erros.EMAIL_INVALIDO);
    return erro === null;
  }

  static create(email: string): Email {
    return new Email(email);
  }

  get usuario(): string {
    return this.email.split("@")[0] ?? "";
  }

  get dominio(): string {
    return this.email.split("@")[1] ?? "";
  }
}
