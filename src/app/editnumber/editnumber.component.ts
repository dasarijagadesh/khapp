import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditnumberService} from '../editnumberservice/editnumber.service';


@Component({
  selector: 'app-editnumber',
  templateUrl: './editnumber.component.html',
  styleUrls: ['./editnumber.component.css']
})
export class EditnumberComponent implements OnInit {

  constructor(private editnumbersform : EditnumberService) { }

   editnumberform = new FormGroup({
    number: new FormControl('',Validators.required)
  })

  get number (){return this.editnumberform.get('number');}

  submit(){
if(this.editnumberform.valid){
this.editnumbersform.posteditnumberapi(this.editnumberform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }

  }

  ngOnInit(): void {
  }

}
