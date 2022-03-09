import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product:ProductsService) { }

  ngOnInit(): void {
  }
addProduct(form:NgForm){
console.log(form.value);
this.product.addData(form.value).subscribe((res)=>{
  console.log(res);
})
}
}
