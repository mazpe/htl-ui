import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class InterceptorServices implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.accessToken}`,
      }
    });
    return next.handle(tokenReq);
  }
}
