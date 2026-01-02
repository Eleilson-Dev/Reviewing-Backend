import { IProduct } from './interface';

const productList: IProduct[] = [];

const postProduct = (product: IProduct): object => {
  productList.push(product);

  return { product, message: 'Produto cadastrado com sucesso' };
};

postProduct({ id: 1, name: ' Geladeira', price: 2400 });
postProduct({ id: 2, name: ' Cooktop', price: 1200 });

const showProductList = (): void => {
  console.log(productList);
};

showProductList();
