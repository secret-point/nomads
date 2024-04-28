export interface IProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  showDetails?: boolean;
}

export type OrderBy = "ASC" | "DSC";
