import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { PostserviceService } from '../services/postservice.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  dataCall: any = [];
  // clickedevent:Object;
  SubscriptionId: any;
  href:any;
  arr:any;
  subcatid:any;

  constructor(private route: ActivatedRoute, private router:Router, private service: PostserviceService) { }
  subscriptionForm=new FormGroup({

  })
  hiddenfilling(){ 

   }
  ngOnInit(): void {

    this.SubscriptionId = this.route.snapshot.params['subid'];
    this.service.postSubscriptionId(this.SubscriptionId).subscribe((res) => {
      this.dataCall = res;
      console.log(this.dataCall);
    })

    this.href=this.router.url;
    this.arr=this.href.split('/');
    this.subcatid=this.arr[this.arr.length-1];
    console.log(this.subcatid);


  }

}
