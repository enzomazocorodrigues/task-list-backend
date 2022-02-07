export interface UseCase<TUseCasePort, TUseCaseResponse> {
  execute(port?: TUseCasePort): Promise<TUseCaseResponse>;
}
