import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productArr: any;

  constructor(private productService: StudentService) {

  }

  ngOnInit(): void {
    this.GetProduct();
  }

  GetProduct() {
    this.productService.GetProductList().subscribe(item => {
      this.productArr = item;
    });
  }


  Delete(e: any) {

  }

  Edit(e: any) {

  }
}
