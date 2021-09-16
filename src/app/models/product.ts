
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0,imageUrl ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jKrT1HwDViFQVBwfKsMrkAHaFF%26pid%3DApi&f=1') 
      {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
      }
  }
