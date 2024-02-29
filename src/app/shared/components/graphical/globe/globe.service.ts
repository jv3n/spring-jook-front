import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {
  constructor(private http: HttpClient) {}

  loadJSONFile(url: string): Signal<Response> {
    return toSignal(this.http.get<any>(url));
  }
}
