import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const updatedRequest = this.updateRequest(request);
    return next.handle(updatedRequest);
  }

  updateRequest(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const newRequest = request;
    return newRequest.clone({
      setHeaders: {
        'X-Men':'Wolverine'
      }
    });
  }
}
