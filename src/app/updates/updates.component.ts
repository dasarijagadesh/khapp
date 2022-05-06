import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { PostserviceService } from '../services/postservice.service';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  dataCall: any = [];

  constructor(private fest: PostserviceService) { }

  ngOnInit(): void {

    this.fest.getApi().subscribe((res) => {
      this.dataCall = res;
      console.log(this.dataCall);
    })




    AOS.init();
  }

}
