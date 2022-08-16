// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';
// import { LocalstorageService } from './localstorage.service';
// import { environment } from 'src/environments/environment';
// import { SpinnerService } from './spinner/spinner.service';

// @Injectable()
// export class Interceptor implements HttpInterceptor {
//   constructor(private localstoragetoken: LocalstorageService, private spinnerService:SpinnerService) {}

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     const token = this.localstoragetoken.getToken();
//     const isAPIUrl = request.url.startsWith(environment.apiURL);

//     if (token && isAPIUrl) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }
//     this.spinnerService.requestStarted();
//     return next.handle(request);
//   }

//   handler(next:HttpHandler, request:HttpRequest<unknown>) {
//     return next.handle(request)
//         .pipe(
//             tap(
//                 (event) => {
//                     if (event instanceof HttpResponse) {
//                         this.spinnerService.requestEnded();
//                     }
//                 },
//                 (error: HttpErrorResponse) => {
//                     this.spinnerService.resetSpinner();
//                     throw error;
//                 }
//             ),
//         );
// }
// }
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner/spinner.service';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService, private localstoragetoken:LocalstorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localstoragetoken.getToken();
    const isAPIUrl = request.url.startsWith(environment.apiURL);

    if (token && isAPIUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    this.spinnerService.requestStarted();
    return this.handler(next, request);
  }

  handler(next: HttpHandler, request: HttpRequest<any>) {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          this.spinnerService.resetSpinner();
          throw error;
        }
      )
    );
  }
}