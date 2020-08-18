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

export interface IMessageParams {
  searchKey?: string;
  receiverType?: "user" | "group";
  affix?: "append" | "prepend";
  id?: string;
  category?: "message" | "action" | "custom";
  type?: string;
  hideDeleted?: boolean;
  onlyDeleted?: boolean;
  sentAt?: number;
  limit?: number;
}

export interface IMessageEntity {
  uid: string;
  name: string;
  role: string;
  avatar: string;
  status: string;
}
export interface IMessageEntityData {
  entity: IMessageEntity;
  entityType: string;
}
export interface IMessageEntities {
  sender: IMessageEntityData;
  receiver: IMessageEntityData;
}
export interface IMessageData {
  text: string;
  entities: IMessageEntities;
  metadata?: object;
}
export interface IMessage {
  id: string;
  conversationId: string;
  sender: string;
  receiverType: "user" | "group";
  receiver: string;
  category: "message" | "action" | "custom";
  type: string;
  data: IMessageData;
  sentAt: number;
  updatedAt: number;
  deliveredAt?: number;
}
export interface IMessages {
  data: IMessage[];
  meta: object;
}
export interface IMessageDeleteDataEntityData {
  uid: string;
  name: string;
  avatar: string;
  status: string;
  role: string;
  createdAt: number;
  createdBy: string;
}
export interface IMessageDeleteDataEntity {
  entity: IMessageDeleteDataEntityData;
  entityType: string;
}
export interface IMessageDeleteDataEntityDataData {
  text: "Hello World";
}
export interface IMessageDeleteDataEntityOnData {
  data: IMessageDeleteDataEntityDataData;
  type: string;
  sender: string;
  category: string;
  entities: IMessageEntities;
  receiver: string;
  receiverType: "user" | "group";
}
export interface IMessageDeleteDataEntityData2 {
  id: string;
  sender: string;
  receiverType: "user" | "group";
  receiver: string;
  category: "message" | "action" | "custom";
  type: string;
  data: IMessageDeleteDataEntityOnData;
  sentAt: number;
  deletedAt: number;
  deletedBy: string;
}
export interface IMessageDeleteDataEntityOn {
  entity: IMessageDeleteDataEntityData2;
  entityType: string;
}
export interface IMessageDeleteDataEntities {
  by: IMessageDeleteDataEntity;
  for: IMessageDeleteDataEntity;
  on: IMessageDeleteDataEntityOn;
}
export interface IMessageDeleteData {
  action: string;
  entities: IMessageDeleteDataEntities;
}
export interface IMessageDelete {
  id: string;
  sender: string;
  receiverType: "user" | "group";
  receiver: string;
  category: "message" | "action" | "custom";
  type: string;
  data: IMessageDeleteData;
  sentAt: number;
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
