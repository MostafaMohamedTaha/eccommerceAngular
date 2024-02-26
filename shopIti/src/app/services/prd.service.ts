import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { StaticProduct } from '../model/static-product';
import { ICategory } from '../model/icategory';

@Injectable({
  providedIn: 'root'
})
export class PrdService {
  headerOpt;
  constructor(private http: HttpClient) {
    this.headerOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  get(): Observable<StaticProduct[]> {
    return this.http.get<StaticProduct[]>(`${environment.apiLink}/products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getCat(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.apiLink}/category`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getByCat(catId: number): Observable<StaticProduct[]> {
    return this.http.get<StaticProduct[]>(`${environment.apiLink}/products?categoryId=${catId}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getById(id: number): Observable<StaticProduct> {
    return this.http.get<StaticProduct>(`${environment.apiLink}/products/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  add(newPrd: StaticProduct): Observable<StaticProduct> {
    return this.http
      .post<StaticProduct>(`${environment.apiLink}/products`, JSON.stringify(newPrd), this.headerOpt)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    //   (x) => {
    //   return throwError(() => new Error(x))
    // }
  }
  private handleError(x: HttpErrorResponse) {
    if (x.error === 0) {
      console.error(x.error)
    } else {
      console.error(`error status${x.status} and error is`, x.error)

    }
    return throwError(() => new Error('error exist'))
  }
  // edit(Prd: StaticProduct): Observable < StaticProduct > {
  //   return this.http.put<StaticProduct>(`${environment.apiLink}/products`)
  // }
  delete(id:number): Observable<StaticProduct> {
    return this.http.delete<StaticProduct>(`${environment.apiLink}/products/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
