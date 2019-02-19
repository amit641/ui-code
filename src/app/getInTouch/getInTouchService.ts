import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetInTouchService {

  constructor(
    private http: HttpClient
  ) { }

  public contact(postData) {
    return this.http
      .post('/api/contact', postData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 504) {
      return throwError('No internet connection. Please Try Again.' || '');
    }
    // return an observable with a user-facing error message
    return throwError(error.error.message || '');
  }
}
