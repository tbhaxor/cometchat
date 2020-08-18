export interface IAPIKeys {
  data: IAPIKeyData[];
  meta: object;
}

export interface IAPIKeyData {
  apiKey: string;
  name: string;
  scope: "fullAccess" | "authOnly";
  createdAt: number;
}

export interface IAPIKeyCreateData {
  name: string;
  scope: "authOnly" | "fullAccess";
}

export interface IAPIKey {
  data: IAPIKeyData;
}

export interface IAPIKeyUpdateData {
  name?: string;
  scope?: "userauth" | "admin";
}

export interface IError {
  message: string;
  devMessage: string;
  code: string;
}

export interface ICallback<T> {
  (err?: IError, data?: T): void;
}
