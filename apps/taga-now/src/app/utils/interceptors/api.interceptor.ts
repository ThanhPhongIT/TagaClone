import { environment } from './../../../environments/environment.prod';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log(req);
    const request = req.clone({
      url: `${environment.baseURL}/api/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    // const request = req.clone({
    //   url: `${req.url}`,
    //   setHeaders: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    return next.handle(request);
  }
}
