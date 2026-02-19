import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {

  serverPath:string = "http://localhost:8084/";

  constructor(private httpClient: HttpClient) { }

  getData(url:string):Observable<any>
  {
    return this.httpClient.get(this.serverPath + url);
  }

  insertData(url:string, obj:any):Observable<any>
  {
    return this.httpClient.post(this.serverPath + url, obj);
  }

}
