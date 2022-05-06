import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  datacall: any = [];
  constructor(private faqdt: PostserviceService) { }

  ngOnInit(): void {
    this.faqdt.getfaqApi().subscribe((res) => {
      this.datacall = res;
      console.log(this.datacall);
    });
  }

}
