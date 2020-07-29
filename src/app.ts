import "reflect-metadata";
import { plainToClass } from "class-transformer"; // class tranformer
import { validate } from "class-validator";

import _ from "lodash"; // lodash
import { Product } from "./product.model";

console.log(_.shuffle([1, 2, 3]));

declare var GLOBAL: any;

console.log(GLOBAL);

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A Book", 12.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

// THIS WILL TRANFORM ANY OBJECT TO AN INSTANCE OF THE Product CLASS
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
