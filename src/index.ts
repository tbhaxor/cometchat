import { format } from "util";
import Axios, { AxiosInstance } from "axios";
import {
  IAPIKeys,
  ICallback,
  IAPIKey,
  IAPIKeyUpdateData,
  IError,
  IAPIKeyCreateData,
} from "./interface";

export class CometChat {
  private _axios: AxiosInstance;

  constructor(
    apiKey: string,
    appId: string,
    region: string,
    version: string = "2.0"
  ) {
    this._axios = Axios.create({
      baseURL: format("https://api-%s.cometchat.io/v%s", region, version),
      headers: {
        apiKey,
        appId,
      },
    });
  }
  // <<<<<<<< API KEYS START
  /**
   * Lists all the API Keys
   *
   * @param cb {ICallback<IAPIKey>} The Callback Function
   * @returns {Promise<IAPIKeys>} Promise like `IAPIKeys`
   */
  public listApiKeys(cb?: ICallback<IAPIKeys>): Promise<IAPIKeys> {
    return new Promise<IAPIKeys>((resolve, reject) => {
      this._axios
        .get<IAPIKeys>("apikeys")
        .then((r) => {
          if (cb && typeof cb == "function") {
            cb(null, r.data);
          } else {
            resolve(r.data);
          }
        })
        .catch((e) => {
          if (cb && typeof cb == "function") {
            cb(e.response.data.error, null);
          } else {
            reject(e.response.data.error);
          }
        });
    });
  }

  /**
   * Get the API Key Details
   *
   * @param key {string} The API Key to fetch
   * @param cb {ICallback<IAPIKey>} The Callback Function
   * @returns {Promise<IAPIKey>} Promise like `IAPIKey`
   */
  public getApiKey(key: string, cb?: ICallback<IAPIKey>): Promise<IAPIKey> {
    return new Promise<IAPIKey>((resolve, reject) => {
      this._axios
        .get<IAPIKey>(`apikeys/${key}`)
        .then((r) => {
          if (cb && typeof cb == "function") {
            cb(null, r.data);
          } else {
            resolve(r.data);
          }
        })
        .catch((e) => {
          if (cb && typeof cb == "function") {
            cb(e.response.data.error, null);
          } else {
            reject(e.response.data.error);
          }
        });
    });
  }

  /**
   * Update the API Key
   *
   * @param key {string} The API Key to Update
   * @param data {IAPIKeyUpdateData} The data to update
   * @param cb {ICallback<IAPIKey>} The Callback Function
   * @returns {Promise<IAPIKey>} Promise like `IAPIKey`
   */
  public updateApiKey(
    key: string,
    data: IAPIKeyUpdateData,
    cb?: ICallback<IAPIKey>
  ): Promise<IAPIKey> {
    return new Promise<IAPIKey>((resolve, reject) => {
      this._axios
        .put<IAPIKey>(`apikeys/${key}`, data)
        .then((r) => {
          if (cb && typeof cb == "function") {
            cb(null, r.data);
          } else {
            resolve(r.data);
          }
        })
        .catch((e) => {
          if (cb && typeof cb == "function") {
            cb(e.response.data.error, null);
          } else {
            reject(e.response.data.error);
          }
        });
    });
  }

  /**
   * Delete the API Key
   *
   * @param key {string} The API Key to Update
   * @param cb {(err?: IError) => void} The Callback Function
   * @returns {Promise<void>} Promise like response
   */
  public deleteApiKey(key: string, cb?: (err?: IError) => void): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this._axios
        .delete(`apikeys/${key}`)
        .then(() => {
          if (cb && typeof cb == "function") {
            cb(null);
          } else {
            resolve();
          }
        })
        .catch((e) => {
          if (cb && typeof cb == "function") {
            cb(e.response.data.error);
          } else {
            reject(e.response.data.error);
          }
        });
    });
  }

  /**
   * Create a fresh API Key
   *
   * @param data {IAPIKeyCreateData} The data to create API Key
   * @param cb {ICallback<IAPIKey>} The Callback Function
   * @returns {Promise<IAPIKey>} Promise like `IAPIKey`
   */
  public createApiKey(
    data: IAPIKeyCreateData,
    cb?: ICallback<IAPIKey>
  ): Promise<IAPIKey> {
    return new Promise<IAPIKey>((resolve, reject) => {
      this._axios
        .post<IAPIKey>("apikeys", data)
        .then((r) => {
          if (cb && typeof cb == "function") {
            cb(null, r.data);
          } else {
            resolve(r.data);
          }
        })
        .catch((e) => {
          if (cb && typeof cb == "function") {
            cb(e.response.data.error);
          } else {
            reject(e.response.data.error);
          }
        });
    });
  }
  // >>>>>>>> API KEYS ENDS

  // <<<<<<<< API KEYS START
  // >>>>>>>> API KEYS ENDS

  // <<<<<<<< API KEYS START
  // >>>>>>>> API KEYS ENDS

  // <<<<<<<< API KEYS START
  // >>>>>>>> API KEYS ENDS

  // <<<<<<<< API KEYS START
  // >>>>>>>> API KEYS ENDS

  // <<<<<<<< API KEYS START
  // >>>>>>>> API KEYS ENDS
}
