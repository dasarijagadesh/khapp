import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { ActivatedRoute } from '@angular/router';
import { AptitudeComponent } from '../aptitude/aptitude.component';


@Component({
  selector: 'app-paidversion',
  templateUrl: './paidversion.component.html',
  styleUrls: ['./paidversion.component.css']
})
export class PaidversionComponent implements OnInit {
  subcat: any = [];
  subCatId: any;
  subcats: any = [];
  CatId: any;

  constructor(private subc: PostserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    

    this.subCatId = this.route.snapshot.params['subCatId'];
    this.subc.postcategoryId(this.subCatId).subscribe((res) => {
      this.subcat = res;
      console.log(this.subcat);
    })
    this.CatId = this.route.snapshot.params['catid'];
    console.log(`cat id is ${this.CatId}`);
    this.subc.getsubcatApi(this.CatId).subscribe((res) => {
      this.subcat = res;
      console.log(this.subcat);
    })

    // this.subc.getsubcatApi().subscribe((res) => {
    //   this.subcat = res;
    //   console.log(this.subcat);
    // })
    //  this.subCatId = this.route.snapshot.params['catid'];
    //     this.subc.postcategoryId(this.subCatId).subscribe((res) => {
    //       this.subcat = res;
    //       console.log(this.subcat);
    //     })
    // this.CatId = this.route.snapshot.params['catsid'];
    //     this.subc.postcategorysId(this.CatId).subscribe((res) => {
    //       this.subcats = res;
    //       console.log(this.subcats);
    //     })  

  }

}
