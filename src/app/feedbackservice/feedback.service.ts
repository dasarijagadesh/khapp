import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }
  postfeedbackapi(feedbackform:any){
    return this.http.post('http://localhost/khapis/suggest_insert_api.php',feedbackform);
  }
}
