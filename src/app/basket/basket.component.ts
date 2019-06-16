import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { Product } from "../product";
import { BasketService } from "../basket.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit {
  basket: Observable<Product[]>;

  constructor(
    private basketService: BasketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getBasket();
  }

  showWarning() {
    this.toastr.warning("Removed from basket");
  }

  getBasket() {
    this.basket = this.basketService.getBasket();
  }

  deletefromBasket(id: string) {
    this.basketService.deletefromBasket(id).subscribe(() => {
      this.showWarning();
      return this.getBasket();
    });
  }
}
