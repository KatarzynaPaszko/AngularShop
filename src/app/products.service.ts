import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private apiUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(map(response => response));
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
