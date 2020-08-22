import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://api.pokemontcg.io/v1/cards';

  constructor(private http: HttpClient) { }

  getcards(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  searchCard(name: string): Observable<any>{
    return this.http.get<any>(`${this.url}?name=${name}`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
