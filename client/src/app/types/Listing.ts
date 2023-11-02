export type TSearchParams = {
    searchParams: {
      search: string;
    }
}
  
export type TSingleItem = {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    },
    picture: string;
    condition: string;
    free_shipping: boolean;
    address: string;
}
  
export type TSearchResp = {
      author: {
          names: string;
          lastname: string;
      },
      categories: string[];
      items: TSingleItem[];
  }