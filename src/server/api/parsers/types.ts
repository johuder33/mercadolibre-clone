export interface MercadoLibreResponse {
  results: Result[];
  filters: any[];
}

export interface Result {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  }
  condition: string;
  sold_quantity: number;
  description?: string;
}
