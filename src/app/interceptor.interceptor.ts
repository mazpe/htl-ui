import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorServices implements HttpInterceptor {
  constructor() {}

  auth = {accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRhYzgyM2UyMDdlMzY0ODM3NjlmODdiZmJiMWY5OTU4YzFhNzM3ZmY2OWY3MzNiMzc5YmRjNTNiZjEzOTZmMzM4ZGQzZWVhY2NmOTQ3ZmFmIn0.eyJhdWQiOiIxIiwianRpIjoiZGFjODIzZTIwN2UzNjQ4Mzc2OWY4N2JmYmIxZjk5NThjMWE3MzdmZjY5ZjczM2IzNzliZGM1M2JmMTM5NmYzMzhkZDNlZWFjY2Y5NDdmYWYiLCJpYXQiOjE2MDAzOTQ4NDAsIm5iZiI6MTYwMDM5NDg0MCwiZXhwIjoxNjMxOTMwODQwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.W0L51ilZF3Ew_U5Ds-JMAU4fWevwWGmloTY0SSnd77AalHr4_upfhdtCxO3Sq4l7q8UcH_naIuyRgoyrtr30JHJkQXVGpDjmGjEcJ2tzRjyiYM7jlrVJvXNffWt4TAMuhNpjw_rASyCFeYFKE7jEDlgMCrC1lPIhsIzY4rIvPOOthcpdj7Sj0QTJC8yVLCGzV2b420IjUDgUzkT0gIUaV3Fbu53snsykdfx6FWTnCIvIEE3hRL6vuuy_eF8kKlLGACRuUfzGsuCjmQnDxcRrvwULOYim9CsoT7EgS9WL-MwG41DXWeClxv50RUDUekU6HMLFf8c7RvovVsGThKTMd609Ua8DMV2VrTuLUtRQVQjHdew4Impj2feFMVC74N4hNbAKuf-x6PzZoqEJgJVrt2306cx3dZsL-uHJ8T7YbUog0BO2eJ7wGokkdbVLr-kpGj2ucbX484lSv4vBdKXnsz3YZ4aH4_XnimIAnDrx5ezR6Lyye6mohP5qvhNer6IVQdtWHnila7G_lOR4vxN3BoNTyqKUFZSEHcxzujquocbxduChkJDRUrCRJ2B4olCyuFZEnmTNS2RmG6HdBDdP3Yx8HMXv1vnoxyDGuqQ41DG2vRti9q1a0Qt0oy9DLUcKOY2ou3qMvJkLNfFBv4sXWCHpL5XjVVB8pleqcf61ksk'}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.accessToken}`,
      }
    });
    return next.handle(tokenReq);
  }
}
