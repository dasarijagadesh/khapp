import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditusernameService} from '../editusernameservice/editusername.service';


@Component({
  selector: 'app-editusername',
  templateUrl: './editusername.component.html',
  styleUrls: ['./editusername.component.css']
})
export class EditusernameComponent implements OnInit {

  constructor(private editusernames : EditusernameService) { }

  editusernameform = new FormGroup({
    username : new FormControl('',Validators.required)
  })

  get username (){return this.editusernameform.get('username');}

   submit(){
if(this.editusernameform.valid){
// this.editusernames.posteditusernameapi(this.editusernameform.value).subscribe((res:any)=>{console.log(res)});
    }
    else{
      console.log('form not valid');
    }

  }


  ngOnInit(): void {
  }

}
