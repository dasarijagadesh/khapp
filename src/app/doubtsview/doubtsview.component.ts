import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
@Component({
  selector: 'app-doubtsview',
  templateUrl: './doubtsview.component.html',
  styleUrls: ['./doubtsview.component.css']
})
export class DoubtsviewComponent implements OnInit {
  datacall: any = [];
  constructor(private dfet: PostserviceService) { }

  ngOnInit(): void {
    this.dfet.getdoubtsApi().subscribe((res) => {
      this.datacall = res;
      console.log(this.datacall);
    });

  }

}
