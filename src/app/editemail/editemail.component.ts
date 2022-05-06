import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditemailService} from '../editemailservice/editemail.service';


@Component({
  selector: 'app-editemail',
  templateUrl: './editemail.component.html',
  styleUrls: ['./editemail.component.css']
})
export class EditemailComponent implements OnInit {

  constructor(private editemailsform :  EditemailService) { }

  editemailform = new FormGroup({
email: new FormControl('',[Validators.required,Validators.email])
  })

 get email (){return this.editemailform.get('email');}


  submit(){
if(this.editemailform.valid){
this.editemailsform.posteditemailapi(this.editemailform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }

  }

  ngOnInit(): void {
  }

}
