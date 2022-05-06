import { Injectable } from '@angular/core';
// import { Http2ServerResponse } from 'http2';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  postdoubtapi(doubtform:any){
    return this.http.post('http://localhost/khapis/doubt_insert_api.php',doubtform);
  }
}
