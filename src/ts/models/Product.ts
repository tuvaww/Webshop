export class Product {
  name: string;
  picture: string;
  pictureAlt: string;
  info: string;
  age: number;
  favoriteToy: string;
  favoriteCandy: string;
  snores: string;
  category: string;
  price: number;
  productSpec: boolean;

  constructor(
    name: string,
    picture: string,
    pictureAlt: string,
    info: string,
    age: number,
    favoriteToy: string,
    favoriteCandy: string,
    snores: string,
    category: string,
    price: number,
    productSpec: boolean,
  ) {
    this.name = name;
    this.picture = picture;
    this.pictureAlt = pictureAlt;
    this.info = info;
    this.age = age;
    this.favoriteToy = favoriteToy;
    this.favoriteCandy = favoriteCandy;
    this.snores = snores;
    this.category = category;
    this.price = price;
    this.productSpec = productSpec;
  }
}
