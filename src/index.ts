export interface IAPICallContext {
  id: string;
}

export interface IAPIData<T> {
  type: "data";
  data: T;
}

export interface IAPIError<T> {
  type: "error";
  error: T;
}

export type APIResult<TData, TError> = IAPIData<TData> | IAPIError<TError>;
