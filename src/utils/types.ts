export interface Restruant {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    veg: boolean;
    sla?: {
      deliveryTime: number;
      slaString: string;
    };
  };
}

export type colortheme = "light" | "dark";

export type FoodType = "veg" | "All";

export interface ThemeContextType{
  theme: colortheme;
  toggleTheme: () => void;
}

export interface Category{
  id: string;
  imageId: string;
  action: {
    text: string;
  }
}