export const extractorArray = (products: any, fieldName: string): string[] => {
  let result = [];
  products.map((product) => {
    if (
      result.length === 0 ||
      !result.find((brand) => brand === product[fieldName])
    ) {
      result.push(product[fieldName]);
    }
  });
  return result;
};
