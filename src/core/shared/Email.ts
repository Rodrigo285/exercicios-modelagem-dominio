import Erros from "../constants/Erros";
import Validador from "../utils/Validador";

export default class Email {
  readonly email: string;

  private constructor(email: string) {
    const emailNormalizado = email.trim();

    if (!Email.validarEmail(emailNormalizado)) throw new Error(Erros.EMAIL_INVALIDO);

    this.email = emailNormalizado;
  }

  static validarEmail(email: string): boolean {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const erro = Validador.regex(email, regex, Erros.EMAIL_INVALIDO);
    return erro === null;
  }

  static create(email: string): Email {
    return new Email(email);
  }
}
