
import { era_strapi } from './eras'

export interface dino {
    id: number;
    name: string;
    fancyName: string;
    described: number | undefined;
    coolness: string;
    eraId: number;
    imageUrl: string;
  }

  export interface dino_data {
    id: number;
    attributes: dino_attributes
  }
  
  export interface dino_attributes {
    Name: string;
    FancyName: string;
    Described: number | undefined;
    Coolness: string;
    Era: era_strapi;
    ImageUrl: string;
  }

  export interface dino_strapi {
    data: dino_data
  }

  export interface dino_strapi_out {
    data: dino_attributes
  }

  export interface dino_strapi_array {
    data: dino_data[]
  }