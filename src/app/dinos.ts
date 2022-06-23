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

  // export const dinos = [
  //   {
  //     id: 1,
  //     name: 'T-Rex',
  //     fancyName: 'Tyrannosaurus rex',
  //     described: 1905,
  //     era: 'Cretaceous',
  //     coolness: 'Really cool, possibly the coolest.',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_Rex_Holotype.jpg',
  //   },
  //   {
  //     id: 2,
  //     name: 'Triceratops',
  //     fancyName: 'Triceratops horridus',
  //     described: 1889,
  //     era: 'Cretaceous',
  //     coolness: 'Three. Obviously.',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/LA-Triceratops_mount-2.jpg/1280px-LA-Triceratops_mount-2.jpg',
  //   },
  //   {
  //     id: 3,
  //     name: 'Apatosaurus',
  //     fancyName: 'Apatosaurus ajax',
  //     described: 1916,
  //     era: 'Jurassic',
  //     coolness: "Cool, but constantly outdone by it's cousin the Brontosaurous.",
  //     imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/59/Apatosaurus_Clean.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Brontosaurus',
  //     fancyName: 'Brontosaurus excelsus',
  //     described: 1879,
  //     era: 'Jurassic',
  //     coolness: 'The name literally means thunder lizard so you tell me.',
  //     imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/2f/AMNH_Apatosaurus.jpg',
  //   },
  //];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
  