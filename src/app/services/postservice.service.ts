import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Getinterface } from '../interface/getinterface';
import { Category } from '../categoryinterface/category';
import { Subcategory } from '../subcategoryinterface/subcategory';

import { Getdoubts } from '../interface/getdoubts';
import { Notifyinterface } from '../interface/notifyinterface';
import { Faqinterface } from '../interface/faqinterface';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  subcat: any = [];
  constructor(private http: HttpClient) { }

  signupdataApi(formdata: any) {
    return this.http.post('http://localhost/khapis/signup_insert_api.php', formdata);
  }

  getApi(): Observable<Getinterface[]> {
    return this.http.get<Getinterface[]>('http://localhost/khapis/updates_fetch_api.php');
  }
  getcategoryApi(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost/khapis/category_fetch_api.php');
  }
  // getsubcatApi(): Observable<Subcategory[]> {
  //   return this.http.get<Subcategory[]>('http://localhost/khapis/sub_category_fetch_api.php');
  // }
  postcategoryId(catid: any) {
    return this.http.post(`http://localhost/khapis/get_category_fetch_api.php?
    catid=${catid}`, catid);
  }
    
    getdoubtsApi(): Observable <Getdoubts[]> {
      return this.http.get<Getdoubts[]>('http://localhost/khapis/doubts_fetch_api.php');
    }
    getnotifyApi(): Observable < Notifyinterface[] > {
      return this.http.get<Notifyinterface[]>('http://localhost/khapis/notifications_fetch_api.php');
    }
    getfaqApi(): Observable < Faqinterface[] > {
      return this.http.get<Faqinterface[]>('http://localhost/khapis/faqfetch.php');
    }
    getsubcatApi(catid: any): Observable < Subcategory[] > {
      return this.http.get<Subcategory[]>(`http://localhost/khapis/get_subcategory_fetch_api.php?catid=${catid}`);
    }
    // postcategoryId(catid: any) {
    //   return this.http.post(`http://localhost/khapis/get_category_fetch_api.php?catid=${catid}`, catid);
    // }
    postSubscriptionId(subid: any) {
      return this.http.post(`http://localhost/khapis/get_subcategory_subscriptions_fetch_api.php?subid=${subid}`,subid);
    }
  }