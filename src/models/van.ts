export type VanType = "simple" | "luxury" | "rugged";

export type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: VanType;
};
