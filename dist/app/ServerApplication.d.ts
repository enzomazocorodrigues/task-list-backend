export declare class ServerApplication {
    private readonly host;
    private readonly port;
    run(): Promise<void>;
    private buildAPIDocumentation;
    private log;
    static new(): ServerApplication;
}
