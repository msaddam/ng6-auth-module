import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpRequest, HttpEvent, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  constructor(private injector: Injector, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request);
  }
}
