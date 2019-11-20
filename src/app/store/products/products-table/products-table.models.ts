export interface ProductTable {
  productId: string | number;
  tabId: string;
  name: string;
  tenant: Tenant;
  status: string;
  isReadonly: boolean;
  pricelistType: string;
  partNumber: string;
  priceStatus: string;
  price: Price;
}

export interface Tenant {
  id: string;
  name: string;
  currency: string;
}

export interface Price {
  id: string | number;
  date: Date | string;
  value: number;
  regionName: string;
  currency: string;
}
