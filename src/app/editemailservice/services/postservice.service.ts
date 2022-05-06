import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Getinterface } from '../interface/getinterface';
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http: HttpClient) { }

  signupdataApi(formdata: any) {
    return this.http.post('http://localhost/khapis/khapis/signup_insert_api.php', formdata);
  }

  getApi(): Observable<Getinterface[]> {
    return this.http.get<Getinterface[]>('http://localhost/khapis/khapis/updates_fetch_api.php');
  }
}
