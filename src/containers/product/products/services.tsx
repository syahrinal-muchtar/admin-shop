import { IParams } from '@/interfaces/iparams';

const baseUrl: string = process.env.API_URL || '';

class ServiceProductList {
  public products = (params: IParams) => ({
    baseUrl,
    method: 'get',
    params,
    uri: 'products',
  });
}

export default new ServiceProductList();
