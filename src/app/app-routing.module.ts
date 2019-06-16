import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { BasketComponent } from "./basket/basket.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  { path: "products", component: ProductsComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "basket", component: BasketComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
