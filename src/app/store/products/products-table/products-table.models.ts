export interface ProductTableItemDTO {
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

export interface ProductTableItemVM extends ProductTableItemDTO {
  editing?: boolean;
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
