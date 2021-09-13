
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl = 'https://duckduckgo.com/?q=man+shoe&t=brave&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fwww.shoesinternational.co.uk%2Fmedia%2Fcatalog%2Fproduct%2Fe%2Fc%2Fecco__430004-01283__main.jpg') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }
