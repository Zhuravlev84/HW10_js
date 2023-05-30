
import { dataInfo } from './data.js';

const data = JSON.parse(dataInfo);

console.log(data);

const content = document.querySelector('body');

data.forEach(({ id, product, price, url }) => {
  const div = document.createElement("div");
  div.classList.add("product");

  const img = document.createElement("img");
  img.classList.add("product-img");
  img.src = url;

  const cardBody = document.createElement("div");
  cardBody.classList.add("product-body");

  const titleProduct = document.createElement("h1");
  titleProduct.classList.add("product-title");
  titleProduct.textContent = product;

  const subtitleProduct = document.createElement("p");
  subtitleProduct.classList.add("product-title");
  subtitleProduct.textContent = `Цена: ${price}`;

  const idProduct = document.createElement("h3");
  idProduct.classList.add("product-text");
  idProduct.textContent = `Артикул: ${id}`;


 
  cardBody.appendChild(idProduct);
  cardBody.appendChild(titleProduct);
  cardBody.appendChild(subtitleProduct);
  div.appendChild(img);
  div.appendChild(cardBody);
  content.appendChild(div);

});
