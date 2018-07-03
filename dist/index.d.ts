export interface ICallContext {
    id: string;
}
export interface IData<T> {
    type: "data";
    data: T;
}
export interface IError<T> {
    type: "error";
    error: T;
}
export declare type CallResult<TData, TError> = IData<TData> | IError<TError>;
