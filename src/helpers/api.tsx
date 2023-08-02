import axios, { AxiosResponse } from "axios";

interface IHeaders {
  Accept: string;
  Authorization: string;
}

export interface IFetchData {
  method: string;
  uri: string;
  params?: any;
  body?: any;
  callback?: any;
  additionalHeader?: any;
}

export async function callAPIs({
  method,
  uri,
  params,
  additionalHeader,
  baseUrl,
  auth = "",
  onUploadProgress,
}: any) {
  const baseUri: string = baseUrl || "";
  const url: string = `${baseUri}/${uri}`;
  const headers: IHeaders = { ...additionalHeader };
  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase())
    ? "params"
    : "data";
  const defaultConfig: object = { method, headers, url };
  const config = { ...defaultConfig, [dataOrParams]: params };
  if (onUploadProgress) {
    Object.assign(config, { onUploadProgress });
  }

  if (auth) {
    Object.assign(config, { auth });
  }

  try {
    const response: AxiosResponse = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
}
