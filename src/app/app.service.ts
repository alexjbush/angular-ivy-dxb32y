import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) { }

  public getContents(path: string): Observable<string> {
    if (isPlatformServer(this.platformId) && path.includes('./')) {
      path = `http://localhost:4200/${path.replace('./', '')}`
    }
    return this.http.get(path, {
      observe: 'body',
      responseType: 'text',
    });
  }
}
