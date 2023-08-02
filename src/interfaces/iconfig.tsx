interface IConfigAuth {
  username: string;
  password: string;
}

export interface IConfig {
  auth?: IConfigAuth;
  baseUrl: string;
  method: string;
  params?: any;
  uri: string;
}
