import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { StaticProduct } from '../model/static-product';
import { ICategory } from '../model/icategory';

@Injectable({
  providedIn: 'root'
})
export class PrdService {
  headerOpt!: any
  constructor(private http: HttpClient) {
    this.headerOpt = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
}
get(): Observable < StaticProduct[] > {
  return this.http.get<StaticProduct[]>(`${environment.apiLink}/products`)
}
getCat(): Observable < ICategory[] > {
  return this.http.get<ICategory[]>(`${environment.apiLink}/category`)
}
getByCat(catId: number): Observable < StaticProduct[] > {
  return this.http.get<StaticProduct[]>(`${environment.apiLink}/products?categoryId=${catId}`)
}
getById(id: number): Observable < StaticProduct > {
  return this.http.get<StaticProduct>(`${environment.apiLink}/products/${id}`)
}
add(newPrd: StaticProduct): Observable < StaticProduct > {
  return this.http.post<StaticProduct>(`${environment.apiLink}/products`, JSON.stringify(newPrd),this.headerOpt)
}
// edit(Prd: StaticProduct): Observable < StaticProduct > {
//   return this.http.put<StaticProduct>(`${environment.apiLink}/products`)
// }
delete (): Observable < StaticProduct > {
  return this.http.delete<StaticProduct>(`${environment.apiLink}/products`)
}
}
