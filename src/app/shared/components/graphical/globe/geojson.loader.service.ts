import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class GeojsonLoaderService {
  constructor(private http: HttpClient) {}

  load(url: string): Signal<Record<string, unknown> | undefined> {
    return toSignal(this.http.get<Record<string, unknown> | undefined>(url));
  }
}
