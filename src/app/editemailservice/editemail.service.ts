import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditemailService {

  constructor(private http : HttpClient) { }
   posteditemailapi(editemailform:any){
    return this.http.post('http://localhost/khapis/edit_email_api.php',editemailform);
  }
}
