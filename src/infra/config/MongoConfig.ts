export class MongoConfig {
  static database = 'nest-task';

  static password = 'enzo1234';

  static get uri(): string {
    // return 'mongodb+srv://admin:enzo1234@cluster0.b1ckh.mongodb.net/nest-task?retryWrites=true&w=majority';
    return `mongodb+srv://admin:${MongoConfig.password}@cluster0.b1ckh.mongodb.net/${MongoConfig.database}?retryWrites=true&w=majority`;
  }
}
