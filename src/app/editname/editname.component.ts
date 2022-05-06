import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditnameService} from '../editnameservice/editname.service';


@Component({
  selector: 'app-editname',
  templateUrl: './editname.component.html',
  styleUrls: ['./editname.component.css']
})
export class EditnameComponent implements OnInit {

  constructor(private editnamesform :  EditnameService) { }

  editnameform = new FormGroup({
    name: new FormControl('',Validators.required)
  })

  get name (){return this.editnameform.get('name');}


  submit(){
if(this.editnameform.valid){
this.editnamesform.posteditnameapi(this.editnameform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }

  }
  ngOnInit(): void {
  }

}
