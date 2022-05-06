import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {


  categorycall: any = [];
  categoryId: any;
  constructor(private aptitudes: PostserviceService, private route: ActivatedRoute) { }



  ngOnInit(): void {

    this.aptitudes.getcategoryApi().subscribe((res) => {
      this.categorycall = res;
      console.log(this.categorycall);
    })

    this.categoryId = this.route.snapshot.params['catid'];
    this.aptitudes.postcategoryId(this.categoryId).subscribe((res) => {
      this.categorycall = res;
      console.log(this.categorycall); //topic data
    })
  }

}