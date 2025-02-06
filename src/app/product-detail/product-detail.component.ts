import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

// product-detail.component.ts
ngOnInit(): void {
  this.route.paramMap.subscribe(params => { // <-- Use observable
    const id = Number(params.get('id'));
    if (id) {
      this.productsService.getProduct(id).subscribe(product => {
        this.product = product;
      });
    }
  });
}
}