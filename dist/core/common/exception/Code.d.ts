export declare type CodeDescription = {
    code: number;
    message: string;
};
export declare class Code {
    static readonly SUCCESS: CodeDescription;
    static readonly BAD_REQUEST_ERROR: CodeDescription;
    static readonly UNAUTHORIZED_ERROR: CodeDescription;
    static readonly WRONG_CREDENTIALS_ERROR: CodeDescription;
    static readonly ACCESS_DENIED_ERROR: CodeDescription;
    static readonly INTERNAL_ERROR: CodeDescription;
    static readonly ENTITY_NOT_FOUND_ERROR: CodeDescription;
    static readonly ENTITY_VALIDATION_ERROR: CodeDescription;
    static readonly USE_CASE_PORT_VALIDATION_ERROR: CodeDescription;
    static readonly VALUE_OBJECT_VALIDATION_ERROR: CodeDescription;
    static readonly ENTITY_ALREADY_EXISTS_ERROR: CodeDescription;
}
