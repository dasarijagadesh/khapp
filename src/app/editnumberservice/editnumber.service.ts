import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditnumberService {

  constructor(private http : HttpClient) { }

  posteditnumberapi(editnumberform:any){
 return this.http.post('http://localhost/khapis/edit_num_api.php',editnumberform);
  }
}
