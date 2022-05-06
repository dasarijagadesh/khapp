import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../doubtservice/service.service';

@Component({
  selector: 'app-doubts',
  templateUrl: './doubts.component.html',
  styleUrls: ['./doubts.component.css']
})
export class DoubtsComponent implements OnInit {

  constructor(private doubtsform :  ServiceService) {}

doubtform = new FormGroup({
cname: new FormControl('',Validators.required),
subcat: new FormControl('',Validators.required),
question: new FormControl('',Validators.required)
  })

  get subject (){return this.doubtform.get('cname');}
  get topic (){return this.doubtform.get('subcat');}
  get doubt (){return this.doubtform.get('question');}

  submit(){
    if(this.doubtform.valid){
this.doubtsform.postdoubtapi(this.doubtform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }
  }

  ngOnInit(): void {
  }

}
