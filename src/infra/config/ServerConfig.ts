export class ServerConfig {
  static readonly HOST: string = process.env.HOST || '0.0.0.0';
  static readonly PORT: number = parseInt(process.env.PORT) || 5000;
}
