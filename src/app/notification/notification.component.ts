import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  datacall: any = []
  constructor(private nfet: PostserviceService) { }

  ngOnInit(): void {

    this.nfet.getnotifyApi().subscribe((res) => {
      this.datacall = res;
      console.log(this.datacall);
    })

  }

}
