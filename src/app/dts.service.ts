import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DtsService {
  url = 'http://localhost:8080/status';

  constructor(private http: HttpClient) { }

  public getStatus(): Observable<any> {
    return this.http.get(this.url, {responseType: 'text'});
  }

  public getTemplate(templateId: string): Observable<any> {
    const urlTemplate = 'http://localhost:8080/render/enrollment/' + templateId + '/1234567';
    return this.http.get(urlTemplate, {responseType: 'text'});
  }

  public saveTemplate(templateId: string): Observable<any> {
    const urlTemplate = 'http://localhost:8080/render/enrollment/' + templateId + '/1234567';
    return this.http.get(urlTemplate, {responseType: 'text'});
  }
}
