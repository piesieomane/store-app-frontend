export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductsResponse = Product[];
