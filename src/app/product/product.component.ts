import {Component, OnInit} from '@angular/core';

class Product {
  name: string;
  price: number;
  img: string;

  constructor(name: any, price: any, img: any) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  name : string = '';
  price: number = 0;
  img: string = '';

  constructor() {
    this.products.push(new Product('Tote1', 10.000, 'https://www.chloe.com/product_image/45577274ch/f/w1080.jpg'));
    this.products.push(new Product('Tote2', 20.000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYx2XL3cfIXoREiHXgi3aGfP8KGVtwOu-8Pg&usqp=CAU'));
    this.products.push(new Product('Tote3', 30.000, 'https://vinasilk.vn/wp-content/uploads/2020/09/mau-tui-tote-canvas-dep-3.jpg'));
  }

  ngOnInit(): void {
  }

  create() {
    this.products.push(new Product(this.name, this.price, this.img))
    this.name = '';
    this.price = 0;
    this.img = '';
  }


  showEditForm(name: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.name = this.products[i].name;
        this.price = this.products[i].price;
        this.img = this.products[i].img;
      }
    }
  }

  delete(name: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products.splice(i, 1)
      }
    }
    return;
  }


  update(name: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.products[i].name = this.name
      this.products[i].price = this.price
      this.products[i].img = this.img
      }
    }
  }
}
