export interface IAPIKeys {
  data: IAPIKey[];
  meta: object;
}
export interface IAPIKey {
  apiKey: string;
  name: string;
  scope: "fullAccess" | "authOnly";
  createdAt: number;
}
export interface IAPIKeyData {
  name: string;
  scope: "authOnly" | "fullAccess";
}

export interface IRoles {
  data: IRole[];
  meta: object;
}
export interface IRole extends IRoleData {
  role: string;
  createdAt?: number;
}
export interface IRoleData {
  name: string;
  description?: string;
  metadata?: object;
}

export interface IError {
  message: string;
  devMessage: string;
  code: string;
  details?: object;
}

export interface ICallback<T> {
  (err?: IError, data?: T): void;
}
