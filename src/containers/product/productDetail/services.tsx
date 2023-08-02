const baseUrl: string = process.env.API_URL || '';

class ServiceProductDetail {
  public detailProduct = (id: string) => ({
    baseUrl,
    method: 'get',
    uri: `products/${id}`,
  });
}

export default new ServiceProductDetail();
