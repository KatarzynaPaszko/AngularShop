import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";

import { Product } from "../product";
import { ProductsService } from "../products.service";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private basketService: BasketService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productsService
      .getProduct(id)
      .subscribe(response => (this.product = response));
  }

  goBack(): void {
    this.location.back();
  }

  showSuccess() {
    this.toastr.success("Added to basket");
  }

  addToBasket(product: Product) {
    this.basketService.addToBasket(product).subscribe(() => this.showSuccess());
  }
}
