export interface era {
    id: number;
    Name: string;
    sortOrder: number;
  }

  export interface era_data {
    id: number;
    attributes: era
  }

  export interface era_strapi {
    data: era_data;
  }

  export interface era_strapi_array {
    data: era_data[]
  }