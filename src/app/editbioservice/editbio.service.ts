import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditbioService {

  constructor(private http: HttpClient) { }

  posteditbioapi(editbioform:any){
    return this.http.post('http://localhost/khapis/edit_bio_api.php',editbioform);
  }
}
