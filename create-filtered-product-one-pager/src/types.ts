export type CollectionName = 'Bellatrix' | 'Vega' | 'Sirius' | 'Rivvo' | 'Mersey Ceramics';

export type ProductCategory = 'Vanity Unit' | 'WC Unit' | 'Tall Unit' | 'Basin';

export type MountType = 'Floor Standing' | 'Wall Hung' | 'Universal / Basin';

export type StyleType = '2 Doors' | '2 Drawers' | 'WC Unit' | 'L-Shape WC' | 'Tall Storage' | 'Ceramic Basin';

export type ColorFamily = 'white' | 'anthracite' | 'grey' | 'black';

export interface Product {
  id: string;
  code: string;
  name: string;
  collection: CollectionName;
  category: ProductCategory;
  mountType: MountType;
  styleType: StyleType;
  size: number; // width in mm (height for tall units)
  sizeLabel: string;
  color: string;
  colorFamily: ColorFamily;
  dimensions: string;
  image: string;
}

export interface FilterState {
  collection: string;
  color: string;
  size: string;
  category: string;
  mountType: string;
  styleType: string;
  searchQuery: string;
  sortBy: 'default' | 'size-asc' | 'size-desc' | 'name-asc' | 'code-asc';
}

export interface SelectionItem {
  product: Product;
  quantity: number;
  addedAt: number;
}
