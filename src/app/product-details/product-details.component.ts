import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    result:any
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
this.product.getData().subscribe((data)=>{
this.result=data
console.log(this.result);
})
  }
 deleteProduct(id: any){
   this.product.deleteData(id).subscribe((res)=>{
     console.log(res);
   })
 }

}
