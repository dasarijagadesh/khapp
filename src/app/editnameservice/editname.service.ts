import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditnameService {

  constructor(private http : HttpClient) { }

   posteditnameapi(editnameform:any){
    return this.http.post('http://localhost/khapis/edit_name_api.php',editnameform);
  }
}
