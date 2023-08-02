const baseUrl: string = process.env.API_URL || '';

class ServiceCartDetail {
  public detailCart = (id: string) => ({
    baseUrl,
    method: 'get',
    uri: `carts/${id}`,
  });
}

export default new ServiceCartDetail();
