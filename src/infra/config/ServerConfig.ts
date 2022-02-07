export class ServerConfig {
  static readonly HOST: string = process.env.HOST || 'localhost';
  static readonly PORT: number = parseInt(process.env.PORT) || 3333;
}
