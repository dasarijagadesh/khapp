import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditusernameService {

  constructor(private http : HttpClient) { }

  posteditusernameapi(editusernameform:any){
    // return this.http.post('')
  }
}
