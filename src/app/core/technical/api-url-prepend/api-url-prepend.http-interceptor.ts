import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export class ApiUrlPrependHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // do not apply apiUrl rule for assets
    if (req.url.startsWith('assets/')) {
      return next.handle(req);
    }

    const baseApiUrl = environment.API_BASE_PATH;

    const newReq = req.clone({
      url: `${baseApiUrl}/${req.url}`,
    });

    return next.handle(newReq);
  }
}
