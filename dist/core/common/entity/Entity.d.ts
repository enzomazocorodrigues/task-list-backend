export declare abstract class Entity<TId extends string | number> {
    id: TId;
    validate(): Promise<void>;
}
