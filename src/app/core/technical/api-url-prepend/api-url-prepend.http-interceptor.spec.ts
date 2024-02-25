import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '@env/environment';
import { ApiUrlPrependHttpInterceptor } from '@core/technical/api-url-prepend/api-url-prepend.http-interceptor';

describe(`ApiUrlPrependHttpInterceptor`, () => {
  let httpTestingController: HttpTestingController;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: ApiUrlPrependHttpInterceptor,
        },
      ],
    });
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClientMock = TestBed.inject(HttpClient);
  });

  test('requests to assets should not be intercepted', () => {
    httpClientMock.get('assets/anyAsset').subscribe();
    const request = httpTestingController.expectOne('assets/anyAsset');
    const response = 'any response';
    request.flush(response);
  });

  test('other requests should be prepend with apiUrl from environment.serverUrl', () => {
    httpClientMock.get('anyApiEndpoint').subscribe();
    const request = httpTestingController.expectOne(`${environment.API_BASE_PATH}/anyApiEndpoint`);
    const response = 'any response';
    request.flush(response);
  });
});
