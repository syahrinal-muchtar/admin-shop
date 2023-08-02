import { IParams } from '@/interfaces/iparams';

const baseUrl: string = process.env.API_URL || '';

class ServiceCartList {
  public carts = (params: IParams) => ({
    baseUrl,
    method: 'get',
    params,
    uri: 'carts',
  });
}

export default new ServiceCartList();
